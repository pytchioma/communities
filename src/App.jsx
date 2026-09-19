import { useState } from 'react'
import './App.css'

// --- SVG Icons ---
function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function AdminIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </svg>
  )
}

function RoutingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function ProgramsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function TalentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  )
}

function FinanceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  )
}

function LaptopIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  )
}

function CommunitiesNavIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ReferralsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

function ReportsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

function LogoutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function MoreVerticalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
    </svg>
  )
}

function PulseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function HashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="10" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="14" y2="21" />
    </svg>
  )
}

function UsersSmallIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function UserPlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  )
}

function SidebarTogglePill() {
  return (
    <div className="sidebar-toggle-pill" title="Toggle Sidebar">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18" />
      </svg>
    </div>
  )
}

function TalentConaLogo() {
  return (
    <div className="brand-logo">
      <svg width="38" height="38" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="44" stroke="#251e82" strokeWidth="4.5" strokeDasharray="180 50" />
        <circle cx="50" cy="50" r="32" stroke="#0ea5e9" strokeWidth="4.5" strokeDasharray="130 40" />
        <circle cx="50" cy="50" r="20" stroke="#f59e0b" strokeWidth="4.5" />
        <circle cx="50" cy="50" r="8" fill="#f59e0b" />
      </svg>
      <div className="brand-name">
        <span className="brand-talent">Talent</span>
        <span className="brand-cona">Cona</span>
      </div>
    </div>
  )
}

// Community icons
function LaptopDeviceIcon() {
  return (
    <div className="comm-icon-box dark-gray">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    </div>
  )
}

function DataChartIcon() {
  return (
    <div className="comm-icon-box">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="10" width="4" height="11" rx="1" fill="#10b981" />
        <rect x="10" y="4" width="4" height="17" rx="1" fill="#0284c7" />
        <rect x="17" y="8" width="4" height="13" rx="1" fill="#ef4444" />
      </svg>
    </div>
  )
}

function PaletteIcon() {
  return (
    <div className="comm-icon-box">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
        <circle cx="13.5" cy="6.5" r=".5" fill="#f59e0b" />
        <circle cx="17.5" cy="10.5" r=".5" fill="#ef4444" />
        <circle cx="8.5" cy="7.5" r=".5" fill="#10b981" />
        <circle cx="6.5" cy="12.5" r=".5" fill="#3b82f6" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z" />
      </svg>
    </div>
  )
}

function GearIcon() {
  return (
    <div className="comm-icon-box dark-gray">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </div>
  )
}

function SmartphoneIcon() {
  return (
    <div className="comm-icon-box dark-gray">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    </div>
  )
}

const navList = [
  { icon: DashboardIcon, label: 'Dashboard' },
  { icon: UserIcon, label: 'User Management' },
  { icon: AdminIcon, label: 'Admin Management' },
  { icon: RoutingIcon, label: 'Admissions & Routing' },
  { icon: ProgramsIcon, label: 'Manage Programs' },
  { icon: TalentIcon, label: 'Talent Corner' },
  { icon: FinanceIcon, label: 'Financial Ops' },
  { icon: LaptopIcon, label: 'Laptops' },
  { icon: CommunitiesNavIcon, label: 'Communities', active: true },
  { icon: ReferralsIcon, label: 'Referrals' },
  { icon: ReportsIcon, label: 'Reports & Insights' },
]

const communityItems = [
  { icon: LaptopDeviceIcon, name: 'Frontend Engineering', members: '342', channels: '8', active: true },
  { icon: DataChartIcon, name: 'Data Science', members: '287', channels: '6' },
  { icon: PaletteIcon, name: 'UX Design', members: '198', channels: '5' },
  { icon: GearIcon, name: 'Backend Development', members: '256', channels: '7' },
  { icon: SmartphoneIcon, name: 'Mobile Development', members: '145', channels: '4' },
]

const channelRows = [
  { name: 'general', desc: 'General discussions', members: '342', messages: '1240', active: true },
  { name: 'announcements', desc: 'Official announcements only', members: '342', messages: '45', active: true },
  { name: 'resources', desc: 'Share learning resources', members: '298', messages: '567', active: true },
  { name: 'help', desc: 'Ask for help and support', members: '312', messages: '892', active: true },
  { name: 'showcase', desc: 'Show off your projects', members: '256', messages: '234', active: true },
  { name: 'off-topic', desc: 'Non-course related chat', members: '189', messages: '456', active: false },
  { name: 'jobs', desc: 'Job opportunities and career', members: '278', messages: '123', active: true },
  { name: 'random', desc: 'Random conversations', members: '156', messages: '678', active: false },
]

const membersList = [
  { initial: 'J', name: 'John Doe', email: 'john@email.com', date: '2026-01-15', messages: '234', status: 'active' },
  { initial: 'J', name: 'Jane Smith', email: 'jane@email.com', date: '2026-01-10', messages: '567', status: 'active' },
  { initial: 'M', name: 'Mike Johnson', email: 'mike@email.com', date: '2026-02-01', messages: '89', status: 'Suspended' },
  { initial: 'S', name: 'Sarah Wilson', email: 'sarah@email.com', date: '2026-02-15', messages: '145', status: 'active' },
  { initial: 'D', name: 'David Brown', email: 'david@email.com', date: '2025-12-01', messages: '892', status: 'active' },
]

function App() {
  const [activeTab, setActiveTab] = useState('channels')
  const [selectedCommunity, setSelectedCommunity] = useState('Frontend Engineering')

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <header className="top-navbar">
        <div className="top-navbar-left">
          <TalentConaLogo />
        </div>
        <div className="top-navbar-right">
          <button className="icon-btn" aria-label="Notifications">
            <BellIcon />
          </button>
          <div className="user-profile">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
              alt="User"
              className="user-profile-img"
            />
          </div>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="app-sidebar">
          <div className="sidebar-nav-container">
            <nav className="sidebar-nav">
              {navList.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.label}
                    className={`sidebar-nav-item ${item.active ? 'active' : ''}`}
                  >
                    <span className="sidebar-nav-icon">
                      <IconComponent />
                    </span>
                    <span className="sidebar-nav-label">{item.label}</span>
                  </button>
                )
              })}
            </nav>

            <button className="sidebar-logout-btn">
              <LogoutIcon />
              <span>Logout</span>
            </button>
          </div>

          <SidebarTogglePill />
        </aside>

        {/* Middle Column: Communities List */}
        <section className="communities-sidebar">
          <div className="communities-header">
            <h2>Communities</h2>
            <div className="communities-search">
              <SearchIcon />
              <input type="text" placeholder="Search communities..." />
            </div>
          </div>

          <div className="communities-list">
            {communityItems.map((item) => {
              const IconComp = item.icon
              const isSelected = selectedCommunity === item.name
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedCommunity(item.name)}
                  className={`community-card ${isSelected ? 'selected' : ''}`}
                >
                  <div className="community-card-icon">
                    <IconComp />
                  </div>
                  <div className="community-card-info">
                    <h3 className="community-card-title">{item.name}</h3>
                    <div className="community-card-meta">
                      <span className="meta-item">
                        <UsersSmallIcon /> {item.members}
                      </span>
                      <span className="meta-item">
                        <HashIcon /> {item.channels}
                      </span>
                    </div>
                    <span className="badge-active">Active</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="create-community-wrapper">
            <button className="btn-create-community">
              <UserPlusIcon />
              <span>Create Communities</span>
            </button>
          </div>
        </section>

        {/* Right Main Content Panel */}
        <main className="content-panel">
          {/* Community Title Banner */}
          <div className="content-header">
            <div className="content-header-title">
              <div className="content-header-icon">
                <LaptopDeviceIcon />
              </div>
              <div>
                <h1>Frontend Engineering</h1>
                <p>342 members • 8 channels</p>
              </div>
            </div>
            <button className="icon-btn-ghost">
              <MoreVerticalIcon />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="content-tabs">
            <button
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <PulseIcon />
              <span>Overview</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'channels' ? 'active' : ''}`}
              onClick={() => setActiveTab('channels')}
            >
              <HashIcon />
              <span>Channels</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'members' ? 'active' : ''}`}
              onClick={() => setActiveTab('members')}
            >
              <UsersSmallIcon />
              <span>Members</span>
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="overview-tab">
              {/* Stat Cards Grid */}
              <div className="stat-cards-grid">
                <div className="stat-card">
                  <div className="stat-card-text">
                    <span className="stat-value">342</span>
                    <span className="stat-label">Total Members</span>
                    <span className="stat-trend trend-green">+12% this month</span>
                  </div>
                  <div className="stat-icon-wrapper icon-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-card-text">
                    <span className="stat-value">1,240</span>
                    <span className="stat-label">Messages Today</span>
                    <span className="stat-trend trend-green">Active</span>
                  </div>
                  <div className="stat-icon-wrapper icon-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-card-text">
                    <span className="stat-value">8</span>
                    <span className="stat-label">Active Channels</span>
                    <span className="stat-trend trend-gray">All operational</span>
                  </div>
                  <div className="stat-icon-wrapper icon-teal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                      <line x1="4" y1="9" x2="20" y2="9" />
                      <line x1="4" y1="15" x2="20" y2="15" />
                      <line x1="10" y1="3" x2="8" y2="21" />
                      <line x1="16" y1="3" x2="14" y2="21" />
                    </svg>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-card-text">
                    <span className="stat-value">3</span>
                    <span className="stat-label">Flagged Messages</span>
                    <span className="stat-trend trend-red">Needs review</span>
                  </div>
                  <div className="stat-icon-wrapper icon-red">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                      <line x1="4" y1="22" x2="4" y2="15" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Recent Activity Card */}
              <div className="activity-card">
                <h3 className="activity-card-title">Recent Activity</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-avatar">J</div>
                    <div className="activity-content">
                      <p>
                        <strong>John Doe</strong> posted in #general
                      </p>
                      <span className="activity-time">2 minutes ago</span>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-avatar">J</div>
                    <div className="activity-content">
                      <p>
                        <strong>Jane Smith</strong> joined the Communities
                      </p>
                      <span className="activity-time">15 minutes ago</span>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-avatar">M</div>
                    <div className="activity-content">
                      <p>
                        <strong>Mike Johnson</strong> posted in #help
                      </p>
                      <span className="activity-time">1 hour ago</span>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-avatar">S</div>
                    <div className="activity-content">
                      <p>
                        <strong>Sarah Wilson</strong> reacted to a message
                      </p>
                      <span className="activity-time">2 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Channels */}
          {activeTab === 'channels' && (
            <div className="channels-tab">
              <div className="table-top-bar">
                <h2>Channel Management</h2>
                <button className="btn-primary-action">
                  <HashIcon />
                  <span>Create Channel</span>
                </button>
              </div>

              <div className="table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>CHANNEL</th>
                      <th>MEMBERS</th>
                      <th>MESSAGES</th>
                      <th>STATUS</th>
                      <th className="text-right">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {channelRows.map((channel) => (
                      <tr key={channel.name}>
                        <td className="cell-channel">
                          <div className="channel-name-row">
                            <span className="channel-hash">#</span>
                            <span className="channel-name">{channel.name}</span>
                          </div>
                          <span className="channel-desc">{channel.desc}</span>
                        </td>
                        <td className="cell-number">{channel.members}</td>
                        <td className="cell-number">{channel.messages}</td>
                        <td>
                          <span
                            className={
                              channel.active ? 'badge-pill-active' : 'badge-pill-inactive'
                            }
                          >
                            {channel.active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="text-right">
                          <button className="icon-btn-ghost">
                            <MoreVerticalIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Members */}
          {activeTab === 'members' && (
            <div className="members-tab">
              <div className="table-top-bar">
                <h2>Communities Members</h2>
                <div className="table-filters">
                  <div className="filter-search">
                    <SearchIcon />
                    <input type="text" placeholder="Search members..." />
                  </div>
                  <div className="filter-select-wrapper">
                    <select className="filter-select" defaultValue="all">
                      <option value="all">All Statuses</option>
                      <option value="active">Active</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Members Table */}
              <div className="table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>MEMBER</th>
                      <th>JOIN DATE</th>
                      <th>MESSAGES</th>
                      <th>STATUS</th>
                      <th className="text-right">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {membersList.map((member) => (
                      <tr key={member.name}>
                        <td className="cell-member">
                          <div className="member-avatar">{member.initial}</div>
                          <div className="member-info">
                            <span className="member-name">{member.name}</span>
                            <span className="member-email">{member.email}</span>
                          </div>
                        </td>
                        <td className="cell-date">{member.date}</td>
                        <td className="cell-number">{member.messages}</td>
                        <td>
                          <span
                            className={
                              member.status.toLowerCase() === 'active'
                                ? 'badge-pill-active'
                                : 'badge-pill-suspended'
                            }
                          >
                            {member.status}
                          </span>
                        </td>
                        <td className="text-right">
                          <button className="btn-manage">Manage</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pending Reviews Section */}
              <div className="pending-reviews-section">
                <div className="pending-reviews-banner">
                  <span>Pending Reviews</span>
                </div>
                <div className="table-container border-top-0">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>MEMBER</th>
                        <th>REQUEST SENT</th>
                        <th>PROGRAM</th>
                        <th className="text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {membersList.map((m) => (
                        <tr key={`review-${m.name}`}>
                          <td className="cell-member">
                            <div className="member-avatar">{m.initial}</div>
                            <div className="member-info">
                              <span className="member-name">{m.name}</span>
                              <span className="member-email">{m.email}</span>
                            </div>
                          </td>
                          <td className="cell-date">{m.date}</td>
                          <td className="cell-program">Mobile Dev & UI/UX</td>
                          <td className="text-right">
                            <div className="review-action-btns">
                              <button className="btn-reject">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                  <circle cx="12" cy="12" r="10" />
                                  <line x1="15" y1="9" x2="9" y2="15" />
                                  <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                                <span>Reject</span>
                              </button>
                              <button className="btn-approve">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="16 9 10 15 7 12" />
                                </svg>
                                <span>Approve</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
