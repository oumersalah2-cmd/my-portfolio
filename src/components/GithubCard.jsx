import { useState, useEffect } from 'react'

function GitHubCard({ username }) {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const data = await response.json()
      setProfile(data)
      setLoading(false)
    }

    fetchProfile()
  }, [username])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="github-card">
      <img src={profile.avatar_url} alt="GitHub Avatar" />
      <h3>{profile.name}</h3>
      <p>{profile.bio}</p>
      <div className="github-stats">
        <div>
          <h4>{profile.public_repos}</h4>
          <p>Repos</p>
        </div>
        <div>
          <h4>{profile.followers}</h4>
          <p>Followers</p>
        </div>
        <div>
          <h4>{profile.following}</h4>
          <p>Following</p>
        </div>
      </div>
      <a href={profile.html_url}>View GitHub Profile</a>
    </div>
  )
}

export default GitHubCard