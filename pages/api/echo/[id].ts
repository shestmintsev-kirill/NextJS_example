import { NextApiRequest, NextApiResponse } from 'next';

interface idApiReq extends NextApiRequest {
  query: {
    id?: string;
  };
}

export default function getById(req: idApiReq, res: NextApiResponse) {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(req.query.id)
  res.json({ id: req.query.id });
}
