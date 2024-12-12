import { customAlphabet } from "nanoid";

export const dynamic = "auto";
export const dynaminParams = true;
export const runtime = "edge";

const getNanoId = () => {
  const nanoid = customAlphabet("6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz", 10);
  return nanoid();
};

export async function GET(): Promise<Response> {
  return new Response(null, {
    status: 307, // 308 for permanent redirect, 307 for temporary redirects
    headers: {
      Location: `/doc/untitled-${getNanoId()}`,
      "cache-control": "no-store, max-age=0",
    },
  });
}
