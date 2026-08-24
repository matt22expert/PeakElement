import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Variables d'environnement Supabase manquantes. Vérifiez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const VOTER_ID_KEY = "meilleur-element-voter-id";

export async function getOrCreateVoterId(): Promise<string> {
  const existing = localStorage.getItem(VOTER_ID_KEY);
  if (existing) return existing;

  const { data, error } = await supabase
    .from("voters")
    .insert({})
    .select("id")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Impossible de créer le votant");
  }

  localStorage.setItem(VOTER_ID_KEY, data.id);
  return data.id;
}

export interface VoteResult {
  remaining: number;
  new_vote_count: number;
}

export async function castVote(voterId: string, symbol: string) {
  const { data, error } = await supabase.rpc("cast_vote", {
    p_voter_id: voterId,
    p_symbol: symbol,
  });
  if (error) throw error;
  return data as unknown as VoteResult;
}

export async function fetchRemainingVotes(voterId: string): Promise<number> {
  const { data, error } = await supabase
    .from("voters")
    .select("remaining")
    .eq("id", voterId)
    .single();
  if (error || !data) return 3;
  return data.remaining;
}

export async function fetchMyVotesGiven(voterId: string): Promise<Record<string, number>> {
  const { data, error } = await supabase
    .from("vote_events")
    .select("symbol")
    .eq("voter_id", voterId);
  if (error || !data) return {};
  const given: Record<string, number> = {};
  for (const row of data) {
    given[row.symbol] = (given[row.symbol] || 0) + 1;
  }
  return given;
}

export interface ElementVotesRow {
  symbol: string;
  votes: number;
}

export async function fetchAllVotes(): Promise<Record<string, number>> {
  const { data, error } = await supabase.from("elements").select("symbol, votes");
  if (error || !data) return {};
  const votes: Record<string, number> = {};
  for (const row of data as ElementVotesRow[]) {
    votes[row.symbol] = row.votes;
  }
  return votes;
}

export async function fetchVoterCount(): Promise<number> {
  const { count, error } = await supabase
    .from("voters")
    .select("*", { count: "exact", head: true });
  if (error || count == null) return 0;
  return count;
}
