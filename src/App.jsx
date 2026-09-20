import { useState } from 'react'
import './App.css'

const navItems = [
  ['dashboard', 'Dashboard'], ['users', 'User Management'], ['users', 'Admin Management'], ['folder', 'Admissions & Routing'],
  ['programs', 'Manage Programs'], ['spark', 'Talent Corner'], ['wallet', 'Financial Ops'], ['laptop', 'Laptops'], ['communities', 'Communities'],
  ['share', 'Referrals'], ['chart', 'Reports & Insights'],
]

const communities = [
  { icon: '▰', name: 'Frontend Engineering', members: '342', channels: '8' },
  { icon: '▥', name: 'Data Science', members: '287', channels: '6' },
  { icon: '🎨', name: 'UX Design', members: '198', channels: '5' },
  { icon: '⚙', name: 'Backend Development', members: '256', channels: '7' },
  { icon: '▥', name: 'Mobile Development', members: '145', channels: '4' },
]

const channelRows = [
  ['general', 'General discussions', '342', '1240', true], ['announcements', 'Official announcements only', '342', '45', true], ['resources', 'Share learning resources', '298', '567', true], ['help', 'Ask for help and support', '312', '892', true], ['showcase', 'Show off your projects', '256', '234', true], ['off-topic', 'Non-course related chat', '189', '456', false], ['jobs', 'Job opportunities and career', '278', '123', true], ['random', 'Random conversations', '156', '678', false],
]

const members = [
  ['J', 'John Doe', 'john@email.com', '2026-01-15', '234', 'active'],
  ['J', 'Jane Smith', 'jane@email.com', '2026-01-10', '567', 'active'],
  ['M', 'Mike Johnson', 'mike@email.com', '2026-02-01', '89', 'Suspended'],
  ['S', 'Sarah Wilson', 'sarah@email.com', '2026-02-15', '145', 'active'],
  ['D', 'David Brown', 'david@email.com', '2025-12-01', '892', 'active'],
]

function Logo() {
  return <div className="brand"><span className="brand-mark"><i /><b /></span><span><strong>Talent</strong><em>Cona</em></span></div>
}

function BellIcon() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 18.5H14M7.5 9.5C7.5 7.29086 9.29086 5.5 11.5 5.5H12.5C14.7091 5.5 16.5 7.29086 16.5 9.5V13.2L18 16.5H6L7.5 13.2V9.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 18.5C9.8 19.3 10.7 19.8 12 19.8C13.3 19.8 14.2 19.3 14.5 18.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
}

function Icon({ name }) {
  const props = { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true' }
  const common = { stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

  switch (name) {
    case 'dashboard':
      return <svg {...props}><rect x="4" y="4" width="7" height="7" rx="1.2" {...common} /><rect x="13" y="4" width="7" height="4" rx="1.2" {...common} /><rect x="13" y="10" width="7" height="10" rx="1.2" {...common} /><rect x="4" y="13" width="7" height="7" rx="1.2" {...common} /></svg>
    case 'users':
      return <svg {...props}><path d="M9 12.5C10.7 12.5 12.1 11.1 12.1 9.4C12.1 7.7 10.7 6.3 9 6.3C7.3 6.3 5.9 7.7 5.9 9.4C5.9 11.1 7.3 12.5 9 12.5Z" {...common} /><path d="M15.5 9.5C16.6 9.5 17.5 8.6 17.5 7.5C17.5 6.4 16.6 5.5 15.5 5.5C14.4 5.5 13.5 6.4 13.5 7.5" {...common} /><path d="M4 17.5C5 15.8 6.8 14.8 9 14.8C11.2 14.8 13 15.8 14 17.5" {...common} /><path d="M15 17.5C15.4 16.5 16.3 15.7 17.5 15.2" {...common} /></svg>
    case 'folder':
      return <svg {...props}><path d="M3.5 7.8C3.5 6.7 4.4 5.8 5.5 5.8H9L10.6 7.2H18.5C19.6 7.2 20.5 8.1 20.5 9.2V16.4C20.5 17.5 19.6 18.4 18.5 18.4H5.5C4.4 18.4 3.5 17.5 3.5 16.4V7.8Z" {...common} /></svg>
    case 'programs':
      return <svg {...props}><path d="M6 6.5H18V17.5H6V6.5Z" {...common} /><path d="M9 6.5V4.5H15V6.5" {...common} /><path d="M9 11.5H15M9 14.5H13" {...common} /></svg>
    case 'spark':
      return <svg {...props}><path d="M12 2.8L13.8 8.2L19.2 10L13.8 11.8L12 17.2L10.2 11.8L4.8 10L10.2 8.2L12 2.8Z" {...common} /></svg>
    case 'wallet':
      return <svg {...props}><path d="M4 8.5V17.2C4 18.3 4.9 19.2 6 19.2H18C19.1 19.2 20 18.3 20 17.2V9.2C20 8.1 19.1 7.2 18 7.2H6C4.9 7.2 4 8.1 4 9.2V8.5Z" {...common} /><path d="M4 9.2H16.8C17.9 9.2 18.8 10.1 18.8 11.2V13.2C18.8 14.3 17.9 15.2 16.8 15.2H4" {...common} /><path d="M15.5 12H18.5" {...common} /></svg>
    case 'laptop':
      return <svg {...props}><rect x="4" y="6" width="16" height="11" rx="2" {...common} /><path d="M2.5 18.5H21.5" {...common} /></svg>
    case 'communities':
      return <svg {...props}><path d="M9 11C10.6569 11 12 9.65685 12 8C12 6.34315 10.6569 5 9 5C7.34315 5 6 6.34315 6 8C6 9.65685 7.34315 11 9 11Z" {...common} /><path d="M16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z" {...common} /><path d="M5.5 17.2C6.5 15.8 7.9 15 9.5 15C11.1 15 12.5 15.8 13.5 17.2" {...common} /><path d="M13.8 17.2C14.3 16.3 15.2 15.6 16.4 15.3" {...common} /></svg>
    case 'share':
      return <svg {...props}><path d="M8 12L16 6" {...common} /><path d="M8 12L16 18" {...common} /><circle cx="5" cy="12" r="2" {...common} /><circle cx="19" cy="6" r="2" {...common} /><circle cx="19" cy="18" r="2" {...common} /></svg>
    case 'chart':
      return <svg {...props}><path d="M5 18.5V9.5M11 18.5V5.5M17 18.5V12.5" {...common} /><path d="M3 18.5H21" {...common} /></svg>
    default:
      return null
  }
}

function Header() {
  return <header className="topbar"><Logo /><div className="top-actions"><span className="bell"><BellIcon /></span><span className="avatar photo">S</span></div></header>
}

function Sidebar() {
  return <aside className="sidebar"><nav>{navItems.map(([icon, label]) => <button key={label} className={label === 'Communities' ? 'active' : ''}><span><Icon name={icon} /></span>{label}</button>)}</nav><button className="logout"><span>⇥</span>Logout</button></aside>
}

function CommunityList({ onOpen, onCreate }) {
  return <section className="community-list"><div className="list-heading"><h2>Communities</h2><label className="search"><span>⌕</span><input placeholder="Search communities..." /></label></div><div className="community-items">{communities.map((community, index) => <button className={`community-item ${index === 0 ? 'selected' : ''}`} key={community.name} onDoubleClick={onOpen}><span className="community-icon">{community.icon}</span><span className="community-copy"><strong>{community.name}</strong><small>♧ {community.members}　# {community.channels}</small><em>Active</em></span></button>)}</div><button className="create-button" onClick={onCreate}>♧ Create Communities</button></section>
}

function CommunityHeader({ setTab, tab }) {
  return <><div className="community-header"><span className="community-icon large">💻</span><div><h1>Frontend Engineering</h1><p>342 members • 8 channels</p></div><span className="more">⋮</span></div><div className="tabs"><button className={tab === 'overview' ? 'selected' : ''} onClick={() => setTab('overview')}>∿　Overview</button><button className={tab === 'channels' ? 'selected' : ''} onClick={() => setTab('channels')}>#　Channels</button><button className={tab === 'members' ? 'selected' : ''} onClick={() => setTab('members')}>♧　Members</button></div></>
}

function Overview() {
  const stats = [['342', 'Total Members', '+12% this month', '♧', 'green'], ['1,240', 'Messages Today', 'Active', '▢', 'blue'], ['8', 'Active Channels', 'All operational', '#', 'teal'], ['3', 'Flagged Messages', 'Needs review', '⚐', 'red']]

  return <><div className="stats">{stats.map(([value, label, note, icon, color]) => <div className="stat" key={label}><div><strong>{value}</strong><span>{label}</span><em className={color}>{note}</em></div><b className={color}>{icon}</b></div>)}</div><section className="activity"><h2>Recent Activity</h2>{[['J', 'John Doe posted in #general', '2 minutes ago'], ['J', 'Jane Smith joined the Communities', '15 minutes ago'], ['M', 'Mike Johnson posted in #help', '1 hour ago'], ['S', 'Sarah Wilson reacted to a message', '2 hours ago']].map(([initial, text, time]) => <div className="activity-row" key={text}><span className="avatar">{initial}</span><div><strong>{text}</strong><small>{time}</small></div></div>)}</section></>
}

function Channels({ onCreateChannel }) {
  return <><div className="section-title"><h2>Channel Management</h2><button className="primary" onClick={onCreateChannel}>#　Create Channel</button></div><div className="table channel-table"><div className="table-head"><span>CHANNEL</span><span>MEMBERS</span><span>MESSAGES</span><span>STATUS</span><span>ACTIONS</span></div>{channelRows.map(([name, description, memberCount, messageCount, active]) => <div className="table-row" key={name}><div><strong>#　{name}</strong><small>{description}</small></div><span>{memberCount}</span><span>{messageCount}</span><span className={`status ${active ? '' : 'inactive'}`}>{active ? 'Active' : 'Inactive'}</span><b>⋮</b></div>)}</div></>
}

function MemberAvatar({ tone = 'purple' }) {
  return <span className={`avatar member-avatar ${tone}`} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.5C14.2091 12.5 16 10.7091 16 8.5C16 6.29086 14.2091 4.5 12 4.5C9.79086 4.5 8 6.29086 8 8.5C8 10.7091 9.79086 12.5 12 12.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 18.5C6.5 16.4 8.9 15.3 12 15.3C15.1 15.3 17.5 16.4 19 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
}

function ManageIcon() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5 15.5L14.5 6L18 9.5L8.5 19H5V15.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M13.5 6.5L17.5 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
}

function RejectIcon() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
}

function ApproveIcon() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5.5 12.5L9.5 16.5L18.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function DropdownIcon() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.8" /><path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
}

function UploadImageIcon() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M7.5 15.5L10.8 12.2L13.2 14.6L16.8 11L18.5 12.7V18.5H7.5V15.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.8" /></svg>
}

function Members() {
  return (
    <>
      <div className="section-title members-title">
        <h2>Communities Members</h2>
        <div className="member-filters">
          <label className="search"><SearchIcon /><input placeholder="Search members..." /></label>
          <button className="select"><span>All Statuses</span><DropdownIcon /></button>
        </div>
      </div>
      <MemberTable />
      <div className="pending"><span>Pending Reviews</span></div>
      <div className="table review-table">
        <div className="table-head"><span>MEMBER</span><span>REQUEST SENT</span><span>PROGRAM</span><span>ACTIONS</span></div>
        {members.map(([initial, name, email, date], index) => (
          <div className="table-row" key={`review-${name}`}>
            <div>
              <MemberAvatar tone={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'blue' : 'mint'} />
              <span><strong>{name}</strong><small>{email}</small></span>
            </div>
            <span>{date}</span>
            <span>Mobile Dev &amp; UI/UX</span>
            <span className="review-actions">
              <span className="review-action reject"><RejectIcon /> Reject</span>
              <span className="review-action approve"><ApproveIcon /> Approve</span>
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

function MemberTable() {
  return (
    <div className="table member-table">
      <div className="table-head"><span>MEMBER</span><span>JOIN DATE</span><span>MESSAGES</span><span>STATUS</span><span>ACTIONS</span></div>
      {members.map(([initial, name, email, date, messages, status], index) => (
        <div className="table-row" key={name}>
          <div>
            <MemberAvatar tone={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'blue' : 'mint'} />
            <span><strong>{name}</strong><small>{email}</small></span>
          </div>
          <span>{date}</span>
          <span>{messages}</span>
          <span className={`status ${status === 'active' ? '' : 'suspended'}`}>{status}</span>
          <button className="manage"><ManageIcon /> Manage</button>
        </div>
      ))}
    </div>
  )
}

function DetailView({ onBack }) {
  const posts = [
    ['AT', 'Admin Team', '2 hours ago', 'Welcome to TalentCona Community! 🎉 This is your space to connect, learn, and grow together. Please read our community guidelines and introduce yourself!', '12 replies'],
    ['SC', 'Sarah Chen', '1 hour ago', 'Quick tip for Front-End Development Program beginners: Always use the key prop when rendering lists! It helps Front-End Development Program identify which items have changed.', '6 replies'],
    ['MR', 'Michael Rodriguez', '45 min ago', 'Just completed my first full-stack project! Thanks to everyone who helped me along the way. The mentorship here is incredible! 🔥', '8 replies'],
    ['EJ', 'Emily Johnson', '30 min ago', "Does anyone have recommendations for CSS Grid resources? I'm struggling with the gallery layout assignment. Any help would be appreciated! 🙏", '4 replies'],
    ['DK', 'David Kim', '15 min ago', "Pro tip: Use Front-End Development Program DevTools to debug your components. It's a game changer for understanding component state and props!", '3 replies'],
  ]

  return (
    <div className="detail-page">
      <button className="back" onClick={onBack}>← Back</button>
      <section className="detail-card">
        <div className="detail-intro">
          <span className="program-icon">⚛</span>
          <div>
            <h1>Front-End Development Program Developers Hub</h1>
            <p>A community for Front-End Development Program developers to share knowledge, best practices, and latest updates</p>
            <small>♧ 15,420 members　 <b>Programming</b></small>
          </div>
        </div>
        <div className="detail-body">
          <aside className="channel-nav">
            <small>CHANNELS</small>
            {['general', 'announcements', 'help-support', 'showcase', 'resources', 'off-topic'].map((channel, index) => (
              <button className={index === 0 ? 'active' : ''} key={channel}>#　{channel}{index === 1 && <i>2</i>}{index === 2 && <i>5</i>}</button>
            ))}
          </aside>
          <div className="conversation">
            <div className="conversation-head"><strong>#　general</strong><span>•　General community discussions</span><b>⌕</b></div>
            <div className="posts">
              {posts.map(([initial, author, time, content, replies]) => (
                <article className="post" key={`${author}-${time}`}>
                  <span className="avatar small">{initial}</span>
                  <div>
                    <header><strong>{author}</strong><small>{time}</small></header>
                    <p>{content}</p>
                    <div className="reactions"><span>{replies}</span></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CommunityCreatePage({ onBack }) {
  return (
    <main className="create-community-page">
      <div className="create-page-shell">
        <div className="create-page-header">
          <button type="button" className="page-back" onClick={onBack} aria-label="Back">←</button>
          <h1>Create Community</h1>
        </div>

        <div className="create-page-card">
          <div className="create-page-form">
            <label className="field-group">
              <span>Community Name <em>*</em></span>
              <input type="text" placeholder="Full-Stack Development" />
            </label>

            <label className="field-group">
              <span>Description <em>*</em></span>
              <textarea rows="3" placeholder="Brief description of the community" />
            </label>

            <div className="field-group">
              <span>Cover Image <em>*</em></span>
              <label className="upload-zone">
                <UploadImageIcon />
                <strong>Click to upload cover image</strong>
                <small>PNG, JPG up to 10MB</small>
                <input type="file" accept="image/png,image/jpeg" />
              </label>
            </div>
          </div>

          <div className="create-page-actions">
            <button type="button" className="modal-cancel" onClick={onBack}>Cancel</button>
            <button type="button" className="modal-submit">Create Community</button>
          </div>
        </div>
      </div>
    </main>
  )
}

function ChannelCreatePage({ onBack }) {
  return (
    <main className="create-community-page">
      <div className="create-page-shell">
        <div className="create-page-header">
          <button type="button" className="page-back" onClick={onBack} aria-label="Back">←</button>
          <h1>Create Channel</h1>
        </div>

        <div className="create-page-card">
          <div className="create-page-form">
            <label className="field-group">
              <span>Channel Name <em>*</em></span>
              <input type="text" placeholder="design-team" />
            </label>

            <label className="field-group">
              <span>Description <em>*</em></span>
              <textarea rows="3" placeholder="Brief description of the channel" />
            </label>

            <div className="field-group">
              <span>Channel Type</span>
              <select className="field-select" defaultValue="public">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>

          <div className="create-page-actions">
            <button type="button" className="modal-cancel" onClick={onBack}>Cancel</button>
            <button type="button" className="modal-submit">Create Channel</button>
          </div>
        </div>
      </div>
    </main>
  )
}

function App() {
  const [tab, setTab] = useState('overview')
  const [detail, setDetail] = useState(false)
  const [createPage, setCreatePage] = useState(false)
  const [createChannelPage, setCreateChannelPage] = useState(false)

  if (detail) {
    return <><Header /><Sidebar /><DetailView onBack={() => setDetail(false)} /></>
  }

  if (createPage) {
    return <><Header /><Sidebar /><CommunityCreatePage onBack={() => setCreatePage(false)} /></>
  }

  if (createChannelPage) {
    return <><Header /><Sidebar /><ChannelCreatePage onBack={() => setCreateChannelPage(false)} /></>
  }

  return (
    <>
      <Header />
      <Sidebar />
      <main className="workspace">
        <CommunityList onOpen={() => setDetail(true)} onCreate={() => setCreatePage(true)} />
        <section className="content">
          <CommunityHeader setTab={setTab} tab={tab} />
          {tab === 'overview' && <Overview />}
          {tab === 'channels' && <Channels onCreateChannel={() => setCreateChannelPage(true)} />}
          {tab === 'members' && <Members />}
        </section>
      </main>
    </>
  )
}

export default App
