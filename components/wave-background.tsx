'use client'

export function WaveBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBjMzYwIDAgNzIwLTQwIDEwODAgMHM3MjAgNDAgMTA4MCAwdjEwMEgwVjIweiIgZmlsbD0iIzBkNDdhMSIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvc3ZnPg==')] 
        bg-repeat-x animate-wave bg-bottom" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBjMzYwIDAgNzIwLTQwIDEwODAgMHM3MjAgNDAgMTA4MCAwdjgwSDBWNDB6IiBmaWxsPSIjMGQ0N2ExIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9zdmc+')] 
        bg-repeat-x animate-wave-slow bg-bottom" 
        style={{ animationDelay: '-2s' }} />
    </div>
  )
}

