import Link from 'next/link'
  
  export default async function Page() {
    return (
      <main className="flex min-h-screen flex-row items-center justify-center">
        <div>
          <div key="players-link" className="">
            <Link href={"/players"}>
              <div>
                <h2>Players</h2>
              </div>
            </Link>
          </div>
          <div key="teams-link">
            <Link href={"/teams"}>
              <div>
                <h2>Teams</h2>
              </div>
            </Link>
          </div>
        </div>
      </main>
    )
  }
  