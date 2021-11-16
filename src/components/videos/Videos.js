import { useSubscription } from 'mqtt-react-hooks'
import Youtube from 'react-youtube'

export default function Status() {
    const { message } = useSubscription([
        'videos',
    ])

    const opts = {
        height: '390',
        width: '640',
    }

    return (
        <>
            <h1>Video list:</h1>
            {
                message?.message?.map(vidId => (
                    <Youtube videoId={vidId} opts={opts}/>
                ))
            }
        </>
    )
}