import mongoose from "mongoose";
import dns from "dns";

const connectDB = async () => {
    try {
        // 🔥 Force reliable DNS (fixes SRV ECONNREFUSED issue)
        dns.setServers(["8.8.8.8", "8.8.4.4"]);
        dns.setDefaultResultOrder("ipv4first");

        // ✅ Validate env
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined");
        }

        // ✅ Connect to MongoDB
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

        // ✅ Connection lifecycle logs
        mongoose.connection.on("connected", () => {
            console.log("📡 Mongoose connected");
        });

        mongoose.connection.on("error", (err) => {
            console.error("❌ Mongoose error:", err.message);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("⚠️ Mongoose disconnected");
        });

    } catch (error) {
        console.error("❌ MongoDB connection failed:");
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;