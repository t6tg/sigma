// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (_req: any, _res: any) => {
  _res.statusCode = 200;
  _res.json({ name: "John Doe" });
};
