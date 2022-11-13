

export default function Banner() {
    return (
        <figure id="Banner" className='myScroll'>
            <video src={process.env.PUBLIC_URL + '/img/vid4.mp4'} loop autoPlay muted></video>
            <h1>THE WOLF</h1>
        </figure>
    )
    }