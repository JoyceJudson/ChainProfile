"use client";

import { zeroAddress, type Address } from "viem";
import { useReadContract } from "wagmi";
import { CHAINPROFILE_CONTRACT_ADDRESS, chainProfileAbi } from "@/lib/contracts";

type ProfileResult = {
  nickname: string;
  bio: string;
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => Promise<unknown>;
  error: Error | null;
};

export function useProfile(address?: Address): ProfileResult {
  const targetAddress = address ?? zeroAddress;

  const { data, isLoading, isFetching, refetch, error } = useReadContract({
    address: CHAINPROFILE_CONTRACT_ADDRESS,
    abi: chainProfileAbi,
    functionName: "profiles",
    args: [targetAddress],
    query: {
      enabled: Boolean(address),
      refetchInterval: 12_000,
    },
  });

  const parsed = data as
    | { nickname?: string; bio?: string }
    | readonly [string, string]
    | undefined;

  const mapped = parsed as { nickname?: string; bio?: string } | undefined;
  const nickname = Array.isArray(parsed)
    ? (parsed[0] ?? "")
    : (mapped?.nickname ?? "");
  const bio = Array.isArray(parsed) ? (parsed[1] ?? "") : (mapped?.bio ?? "");

  return {
    nickname,
    bio,
    isLoading,
    isFetching,
    refetch,
    error: (error as Error | null) ?? null,
  };
}
