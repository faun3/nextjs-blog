//TODO - implement google auth (this needs a google cloud account)
// timestamp -- 2:18:02
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/github'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || 'nothing',
            clientSecret: process.env.GOOGLE_SECRET || 'nothing',
        })
    ]
})