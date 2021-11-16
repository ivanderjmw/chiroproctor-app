import { useSubscription } from 'mqtt-react-hooks'
import Youtube from 'react-youtube'

export default function Status() {
    const { message } = useSubscription([
        'video',
    ])

    const opts = {
        height: '200',
        width: '300',
    }

    return (
        <>
            <h2>Reccomendations</h2>
            {message?.message}
            {
                message?.message ? JSON.parse(message.message).map((vidId, i) => (
                    <Youtube videoId={vidId} opts={opts} key={i}/>
                )) : 'No reccommendations yet'
            }
            {/* <div>
                <h3></h3>
                <Youtube videoId={'liJVSwOiiwg'} opts={opts}/>
            </div> */}
        </>
    )
}