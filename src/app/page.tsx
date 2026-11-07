import { prisma } from "@/lib/prisma";

export default async function Home() {
  let dbStatus = "Disconnected";

  try {
    await prisma.$queryRaw`SELECT 1`;
    dbStatus = "Connected";
  } catch (error) {
    dbStatus = "Error connecting to database";
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-background text-foreground">
      <div className="max-w-2xl w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Finance Tracker
        </h1>
        <p className="text-muted-foreground text-lg">
          Personal + Company Expense Management Platform
        </p>

        <div className="grid gap-4 mt-10 text-left border rounded-lg p-6 bg-card">
          <div className="flex justify-between">
            <span className="font-medium">Database Status</span>
            <span className={dbStatus === "Connected" ? "text-green-600" : "text-red-600"}>
              {dbStatus}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Environment</span>
            <span>{process.env.NODE_ENV}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Next.js</span>
            <span>App Router + TypeScript</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Foundation is ready. Next: Authentication + Dashboard + Multi-language.
        </p>
      </div>
    </main>
  );
}