// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IMAGES_LINK } from "../../constants";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export function sendCandidateRequest(url: string, data: FormData) {
  fetch(`${IMAGES_LINK}/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: data,
  })
    .then(response => response.json())
    .then(data => console.log(data));
}
