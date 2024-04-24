import { useNavigate } from "react-router-dom";
import { ChannelCard } from "./ChannelCard";

export const Channels = ({channels}) => {
    const navigate = useNavigate()

    const handleNavigateToChannel = (id) => {
        navigate(`/channels(${id})`)
    }

    return (
        <div className="channels-container">
            {channels.map((c) => (
                <ChannelCard
                    key={c.id}
                    title={c.title}
                    id={c.id}
                    username={c.username}
                    isOnline={c.isOnline}
                    avatarUrl={c.avatarUrl}
                    navigateToChannelHandler={handleNavigateToChannel}
                />
        ))}
        </div>
    )
}