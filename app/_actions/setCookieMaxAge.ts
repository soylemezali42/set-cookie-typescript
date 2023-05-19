
'use server';

import { cookies } from "next/dist/client/components/headers";

export default async function setCookieMaxAge() {


  cookies().set({
    name: '_name',
    value: 'test',
    maxAge: 60 * 60
  })

  return Promise.resolve('ok')

}