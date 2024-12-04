import { connectionStr } from "@/app/lib/db";
import { customerSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data = await customerSchema.find();
    
    return NextResponse.json({data})
}