export default function PlayList ({ playListItems }) {
  return (
    <div>
      {JSON.stringify(playListItems)}
    </div>
  )
}

export async function getStaticProps () {
  try {
    var data = await (await fetch('https://api.github.com/users/kurodamaria')).json()
  } catch (_) {
    data = null
  }
  return {
    props: {
      playListItems: data
    }
  }
}
