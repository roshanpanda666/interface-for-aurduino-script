import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connecttionSRT } from "@/lib/thin";
import { DATA } from "@/lib/model/dataschema";


export async function GET(){
    await mongoose.connect(connecttionSRT)
    const data=await DATA.find()
    console.log(data);
    return NextResponse.json({result:true})
}

export async function POST(request){
    const payload =await request.json()
    await mongoose.connect(connecttionSRT)
    let user=new DATA(payload)
    const content=await user.save()
    return NextResponse.json({content,success:true})
}
