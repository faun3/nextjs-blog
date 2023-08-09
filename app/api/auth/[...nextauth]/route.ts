//TODO - implement google auth (this needs a google cloud account)
// timestamp -- 2:18:02
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/github'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ]
})