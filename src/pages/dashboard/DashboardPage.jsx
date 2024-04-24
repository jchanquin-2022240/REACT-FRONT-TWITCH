import { useEffect } from "react"
import { NavBar } from "../../components/navbars/Navbar"
import { useChannels, useUserDetails } from "../../shared/hooks"
import { LoadingSpinner } from "../../components/LoadingSpinner"
import { Content } from "../../components/dashboard/Content"
import { Sidebar } from "../../components/navbars/Sidebar"
import './dashboardPage.css'

export const DashboardPage = () => {
  const { getChannels, allChannels, isFectching, followedChannels } = useChannels()
  const { isLogged } = useUserDetails()

  useEffect(() => {
    getChannels(isLogged)
  }, [])

  if (isFectching) {
    <LoadingSpinner/>
  }
  return (
    <div className="dashboard-container">
      <NavBar/>
      <Sidebar channels={followedChannels}/>
      <Content channels={allChannels || []} getChannels={getChannels}/>
    </div>
  )
}
