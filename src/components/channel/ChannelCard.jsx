
const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yBZToHzNNuN502h66BG8vVoPlusxCVMVKQ&s'

const ChannelAvatar = ({url}) => {
    return (
        <div className="channels-avatar-container">
            <img src={url ? url : imageUrl} width='100%' height='100%' alt="userImage" />
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

    return (
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}