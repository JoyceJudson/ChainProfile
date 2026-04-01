export const CHAINPROFILE_CONTRACT_ADDRESS =
  "0x9554535b0b4F3f725e72ECB9aC7AA539d91c1301" as const;

export const BASE_APP_ID = "69ccb9011aacdcc17b255163";
export const TALENT_PROJECT_VERIFICATION =
  "d5ebdec8c5d080a279616d63a020f513f8fa4edcfc1b6d1f7ba83e27809aa620f213ef706241d2da16574011aee914a9f28ec64b237ef3d742bc0728d6d5707a";
export const APP_ID = "111";
export const CHAINPROFILE_APP_ID = APP_ID;
export const CHAINPROFILE_APP_NAME = "ChainProfile";
export const BUILDER_CODE = "bc_gs2vz1e7";
export const BUILDER_CODE_DATA_SUFFIX =
  "0x62635f677332767a3165370b0080218021802180218021802180218021";

export const CHAINPROFILE_CONTRACT_ADDRESS_PLACEHOLDER =
  "CHAINPROFILE_CONTRACT_ADDRESS_PLACEHOLDER";
export const BASE_APP_ID_PLACEHOLDER = "BASE_APP_ID_PLACEHOLDER";
export const TALENT_VERIFICATION_PLACEHOLDER = "TALENT_VERIFICATION_PLACEHOLDER";
export const CHAINPROFILE_APP_ID_PLACEHOLDER = "CHAINPROFILE_APP_ID_PLACEHOLDER";
export const BUILDER_CODE_PLACEHOLDER = "BUILDER_CODE_PLACEHOLDER";
export const GITHUB_TOKEN_PLACEHOLDER = "GITHUB_TOKEN_PLACEHOLDER";
export const VERCEL_TOKEN_PLACEHOLDER = "VERCEL_TOKEN_PLACEHOLDER";

export const chainProfileAbi = [
  {
    type: "function",
    name: "setProfile",
    stateMutability: "nonpayable",
    inputs: [
      { name: "nickname", type: "string" },
      { name: "bio", type: "string" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "profiles",
    stateMutability: "view",
    inputs: [{ name: "", type: "address" }],
    outputs: [
      { name: "nickname", type: "string" },
      { name: "bio", type: "string" },
    ],
  },
] as const;
