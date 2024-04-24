import { useState } from "react";
import toast from "react-hot-toast";
import { getChannels as getChannelsRequest } from "../../services";
import { getFollowedChannels } from "../../services/api";

export const useChannels = () => {
    const [ channels, setChannels ] = useState()

    const getChannels = async (isLogged = false) => {
        const channelsData = await getChannelsRequest()

        if (channelsData.error){
            return toast.error(
                channelsData.e?.response?.data?.message || 
                'ocurrió un error al buscar los canales en la base de datos'
            )
        }

        const followedChannelsData = await getFollowedChannels()

        if (followedChannelsData.error){
            return toast.error(
                followedChannelsData.e?.response?.data?.message || 
                'ocurrió un error al seguir un canal en la base de datos'
            )
        }

        setChannels({
            channels: channelsData.data.channels,
            followedChannelsData: channelsData.data.channels.filter(channel =>
                followedChannelsData.data.followedChannels.includes(channel.id))
        })
    }
    
    return {
        getChannels,
        isFectching: !Boolean(channels),
        allChannels: channels?.channels,
        followedChannels: channels?.followedChannels
    }
}
