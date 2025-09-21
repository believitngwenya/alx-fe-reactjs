{results.map((user) => (
  <div
    key={user.id}
    className="border rounded p-4 flex items-center space-x-4"
    onClick={async () => {
      // 👉 here you can call fetchUserData
      const details = await fetchUserData(user.login);
      console.log(details); // or set state to display details
    }}
  >
    <img
      src={user.avatar_url}
      alt={`${user.login} avatar`}
      className="w-16 h-16 rounded-full"
    />
    <div>
      <h2 className="text-lg font-semibold">{user.login}</h2>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View Profile
      </a>
    </div>
  </div>
))}
