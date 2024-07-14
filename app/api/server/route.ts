import { NextResponse } from "next/server";

export async function POST(req:Request){
   try{

   }
   catch(error){
      console.log("[SERVERS_POST]",error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
   }
}