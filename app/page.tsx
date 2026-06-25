import type { ReactNode } from 'react';

const nav = [
  ['Product', '#product'], ['Solutions', '#solutions'], ['Resources', '#resources'], ['Platform', '#accounting'], ['Company', '#company']
];

const features = [
  ['🚀','AI Dispatch Assistant','Post loads, find carriers, compare rates, and move freight faster from one screen.'],
  ['📞','AI Voice Negotiator','AI calls carriers, confirms availability, negotiates rates, and logs every result.'],
  ['📍','Real-Time Tracking','Live GPS, ETA predictions, check-call automation, and delay alerts.'],
  ['🛡️','Fraud Shield','Detect double brokering, risky carriers, duplicate MCs, and suspicious behavior.'],
  ['💬','Customer Service AI','24/7 shipment updates, POD requests, customer questions, and status emails.'],
  ['📊','Analytics & Insights','Track profit per lane, dispatcher performance, carrier usage, and revenue trends.'],
];
const solutions = [
  ['Freight Brokers','Book more loads with fewer calls and less manual follow-up.'],
  ['3PL Teams','Centralize dispatch, tracking, carrier communication, and documents.'],
  ['Carrier Networks','Source reliable carriers faster and reduce fraud risk.'],
];
const resources = [
  ['ROI Calculator','Estimate call savings, booked loads, and added monthly profit.'],
  ['Implementation Guide','See how Transa connects to your current TMS and tools.'],
  ['Security Center','Learn about permissions, audit logs, and compliance controls.'],
];

/* ── Shared sidebar ──────────────────────────────── */
const sideItems = [
  ['Dashboard',false],['Loads',false],['CarrierQ™',false],['CRM',false],['Customers',false],
  ['Calendar',false],['Email Marketing',false],['Accounting',false],['Reports',false],
  ['Carrier Network',false],['Compliance',false],['AI Hub',true],['AI Intake',true],['Automation',false],
] as const;

function AppSidebar({ active }: { active: string }) {
  return (
    <div className="app-sidebar-light">
      <div className="app-sidebar-logo">
        <b>NexGen Global<br/>Logistics LLC</b>
        <span>AI FREIGHT</span>
      </div>
      {sideItems.map(([label, ai]) => (
        <div key={label} className={`app-sidebar-item${label === active ? ' app-sidebar-active' : ''}`}>
          {label}{ai && <span className="app-ai-chip">AI</span>}
        </div>
      ))}
    </div>
  );
}

function BrowserFrame({ url, children, large }: { url: string; children: ReactNode; large?: boolean }) {
  return (
    <div className={`browser-frame${large ? ' showcase-main' : ''}`}>
      <div className="browser-top">
        <div className="tl"><span /><span /><span /></div>
        <div className="url-bar">{url}</div>
      </div>
      {children}
    </div>
  );
}

/* ── Screen 1: Live Dashboard ────────────────────── */
function DashboardScreen() {
  return (
    <div className="app-light">
      <AppSidebar active="Dashboard" />
      <div className="app-main-light">
        <div className="app-topbar-light">
          <div className="app-ai-search">Ask AI: "find carriers Chicago→Dallas reefer", "post load", "margin this week"…</div>
          <div className="app-topbar-right">
            <span style={{fontSize:'11px',color:'#334155',fontWeight:600}}>Dashboard</span>
            <span className="app-tbtn">System Admin</span>
            <span className="app-tbtn" style={{background:'#2563eb',color:'#fff',border:'none'}}>ADMIN</span>
            <span className="app-tbtn">Logout</span>
          </div>
        </div>
        <div className="app-pad">
          {/* World Clocks */}
          <div className="app-sec">World Clocks <span style={{color:'#94a3b8',fontWeight:400}}>5 cities</span></div>
          <div className="clocks">
            {[['US','Los Angeles','09:24:27 PM','blue'],['US','Chicago','11:24:27 PM',''],['US','New York','12:24:27 AM',''],['GB','London','05:24:27 AM',''],['SG','Singapore','12:24:27 PM','']].map(([country,city,time,color])=>(
              <div key={city} className={`clock${city==='Los Angeles'?' active':''}`}>
                <div style={{fontSize:'8px',color:'#94a3b8'}}>{country}</div>
                <div className="clock-city">{city}</div>
                <div className={`clock-time${color?' blue':''}`}>{time}</div>
                <div style={{fontSize:'8px',color:'#94a3b8'}}>Wed, Jun 24</div>
              </div>
            ))}
          </div>
          {/* Quick Actions */}
          <div className="app-sec">Quick Actions</div>
          <div className="quick-actions">
            <div className="qa qa-dark">🌐 Onboard Carrier<br/><span style={{fontSize:'9px',fontWeight:400,opacity:.7}}>Add new carrier</span></div>
            <div className="qa qa-blue">👤 Invite Shipper<br/><span style={{fontSize:'9px',fontWeight:400,opacity:.8}}>Send invitation</span></div>
            <div className="qa qa-green">$ Create Quote<br/><span style={{fontSize:'9px',fontWeight:400,opacity:.8}}>Generate rate quote</span></div>
            <div className="qa qa-orange">▶ Create Load<br/><span style={{fontSize:'9px',fontWeight:400,opacity:.8}}>Book a shipment</span></div>
          </div>
          {/* Today at a Glance */}
          <div className="app-sec">Today at a Glance</div>
          <div className="glance-row">
            {[['▶','0.7%','31','Total Loads Booked'],['$','3.5%','$25,928.22','Total Revenue'],['□','-0.9%','$3,682','Gross Margin ($)'],['◉','0.9%','14.2%','Gross Margin (%)'],['$','1.5%','$119','Avg Margin / Load']].map(([icon,pct,val,label])=>(
              <div key={label} className="glance-card">
                <div className="glance-top"><span style={{fontSize:'11px'}}>{icon}</span><b className={`glance-pct${pct.startsWith('-')?' neg':''}`}>{pct.startsWith('-')?'▼':'▲'} {pct}</b></div>
                <div className="glance-num">{val}</div>
                <div className="glance-label">{label}</div>
              </div>
            ))}
          </div>
          {/* Live Ops */}
          <div className="app-sec">Live Operations Snapshot</div>
          <div className="ops-row">
            {[['🚛','31','Loads In Transit','Scheduled Pickups'],['📦','12','Loads Pickup Today','Scheduled Pickups'],['✅','9','Delivery Today','Scheduled Deliveries'],['⚠️','3','Loads at Risk','Needs attention'],['○','10','Pending Quotes','Awaiting approval']].map(([icon,n,label,sub])=>(
              <div key={label} className="ops-card">
                <span style={{fontSize:'16px'}}>{icon}</span>
                <b>{n}</b>
                <small>{label}<br/>{sub}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 2: Load Management ───────────────────── */
function LoadsScreen() {
  const loads = [
    ['NEXGENTMS-010057','Coastal Seafood Corp','HOUSTON, AK → HOUSTON, AK','Dry Van','$3,500','$2,500','28.6%','Jun 23','open'],
    ['PRO-010049','Lone Star Beverages','Los Angeles, CA → Houston, TX','Reefer','$1,291','$989','23.4%','May 22','delivered'],
    ['PRO-010026','American Apparel Dist.','Cleveland, OH → Phoenix, AZ','RGN','$3,116','$2,300','26.2%','May 8','dispatched'],
    ['PRO-010056','Prairie Grain Cooperative','Miami, FL → Charlotte, NC','RGN','$3,209','—','—','Jun 13','open'],
    ['PRO-010003','Midwest Foods Inc','New Orleans, LA → Denver, CO','Flatbed','$1,796','$1,443','19.6%','May 24','intransit'],
  ] as const;
  const tabs = ['All (97)','Open (12)','Booked','Dispatched (9)','Driver On Route','Loading','On Route','In Transit (10)','Delivered (38)','Delayed','On Hold'];
  return (
    <div className="app-light">
      <AppSidebar active="Loads" />
      <div className="app-main-light">
        <div className="app-topbar-light">
          <div>
            <div className="app-topbar-title">Load Management</div>
            <div className="app-sub">57 total loads</div>
          </div>
          <div className="app-topbar-right">
            <button className="app-tbtn">↑ CSV Import</button>
            <button className="app-tbtn">↓ Export</button>
            <button className="app-tbtn-primary">+ New Load</button>
          </div>
        </div>
        <div className="app-pad">
          <div className="l-tabs">
            {tabs.map((t,i)=><span key={t} className={`l-tab${i===0?' on':''}`}>{t}</span>)}
          </div>
          <div className="lt">
            <div className="lt-head loads-head">
              <span>Load #</span><span>Customer</span><span>Route</span><span>Equip.</span>
              <span>Cust. Rate</span><span>Carr. Rate</span><span>Margin</span><span>Pickup</span><span>Status</span>
            </div>
            {loads.map(([id,cust,route,eq,cr,carrate,margin,date,status])=>(
              <div key={id} className="lt-row loads-row">
                <span className="lt-id">{id}</span>
                <span className="lt-cust">{cust}</span>
                <span className="lt-route">{route}</span>
                <span>{eq}</span>
                <span className="lt-rate">{cr}</span>
                <span>{carrate}</span>
                <span className="lt-margin">{margin}</span>
                <span>{date}</span>
                <span className={`st st-${status}`}>{status === 'intransit' ? 'In Transit' : status.charAt(0).toUpperCase()+status.slice(1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 3: CRM / Quotation Management ────────── */
function CRMScreen() {
  const quotes = [
    ['Q-01038','Blue Ridge Agricultural','Chicago, IL → Dallas, TX','Dry Van','$200','Jun 23','Manual','pending'],
    ['Q-01037','Midwest Foods Inc','Chicago, IL → Dallas, TX','Reefer','$2,950','Jun 24','Email','pending'],
    ['Q-01031','Lone Star Beverages','Chicago, IL → Denver, CO','Step Deck','$3,630.43','Jun 22','Manual','approved'],
    ['Q-01008','Atlantic Electronics Corp','Atlanta, GA → Detroit, MI','Power Only','$3,285.51','Jun 5','Manual','approved'],
    ['Q-01032','Prairie Grain Cooperative','New Orleans, LA → Portland, OR','Reefer','$3,619.17','Jul 3','Email','rejected'],
  ] as const;
  return (
    <div className="app-light">
      <AppSidebar active="CRM" />
      <div className="app-main-light">
        <div className="app-topbar-light">
          <div>
            <div className="app-topbar-title">Quotation Management</div>
            <div className="app-sub">38 total quotes</div>
          </div>
          <div className="app-topbar-right">
            <input className="app-tbtn" placeholder="Search quotes, customers…" style={{width:'160px',fontSize:'11px'}} readOnly />
            <select className="app-tbtn" style={{cursor:'pointer'}}><option>All Statuses</option></select>
            <button className="app-tbtn-primary">+ New Quote</button>
          </div>
        </div>
        <div className="app-pad">
          <div className="l-tabs">
            {[['All','38',''],['Pending','10','pending'],['Approved','21','approved'],['Rejected','3','rejected'],['Converted','4','converted']].map(([l,n,k],i)=>(
              <span key={l} className={`l-tab${i===0?' on':k?' '+k:''}`}>{l} ({n})</span>
            ))}
          </div>
          <div className="lt">
            <div className="lt-head crm-head">
              <span>Quote #</span><span>Customer</span><span>Route</span><span>Equipment</span>
              <span>Rate</span><span>Pickup</span><span>Source</span><span>Status</span>
            </div>
            {quotes.map(([id,cust,route,eq,rate,pickup,src,status])=>(
              <div key={id} className="lt-row crm-row">
                <span className="lt-id">{id}</span>
                <span className="lt-cust">{cust}</span>
                <span className="lt-route">{route}</span>
                <span>{eq}</span>
                <span className="lt-rate">{rate}</span>
                <span>{pickup}</span>
                <span className="lt-src">{src}</span>
                <span className={`st st-${status}`}>{status.charAt(0).toUpperCase()+status.slice(1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 4: Reports & Analytics ──────────────── */
function ReportsScreen() {
  const bars = [{m:'2026-04',r:85,c:55},{m:'2026-05',r:100,c:68},{m:'2026-06',r:45,c:52}];
  return (
    <div className="app-light">
      <AppSidebar active="Reports" />
      <div className="app-main-light">
        <div className="app-topbar-light">
          <div className="app-topbar-title">Report</div>
          <div className="app-topbar-right">
            <input className="app-tbtn" placeholder="Search reports…" readOnly style={{width:'130px'}} />
            <button className="app-tbtn">↺ Refresh</button>
            <button className="app-tbtn-primary">↓ Export</button>
          </div>
        </div>
        <div className="app-pad">
          <div className="rpt-metrics">
            {[['$','Revenue Generated','$51,916.54','+15%'],['$','Gross Profit','$29,359.54','+15%'],['◉','New Quotes','72','+22%'],['▶','Total Loads','57','+22%']].map(([icon,label,val,pct])=>(
              <div key={label} className="rpt-metric">
                <div className="rpt-metric-top"><span>{icon}</span>{label}</div>
                <div className="rpt-metric-val">{val}</div>
                <div className="rpt-metric-pct">▲ {pct} vs last month</div>
              </div>
            ))}
          </div>
          <div className="rpt-charts">
            {/* Shippers pie */}
            <div className="rpt-card">
              <div className="rpt-card-title">◉ Shippers <span>Total: 23</span></div>
              <div className="pie-wrap">
                <div className="pie" style={{background:'conic-gradient(#3b82f6 0% 87%,#f59e0b 87% 96%,#ef4444 96% 100%)'}}/>
                <div className="pie-legend">
                  <span><b style={{color:'#3b82f6'}}>◼</b> Active 20</span>
                  <span><b style={{color:'#f59e0b'}}>◼</b> Inactive 2</span>
                  <span><b style={{color:'#ef4444'}}>◼</b> Pending 1</span>
                </div>
              </div>
            </div>
            {/* Carriers pie */}
            <div className="rpt-card">
              <div className="rpt-card-title">◉ Carriers <span>Total: 60</span></div>
              <div className="pie-wrap">
                <div className="pie" style={{background:'conic-gradient(#22c55e 0% 72%,#ef4444 72% 78%,#6366f1 78% 83%,#94a3b8 83% 95%,#f59e0b 95% 100%)'}}/>
                <div className="pie-legend" style={{fontSize:'9px'}}>
                  <span><b style={{color:'#22c55e'}}>◼</b> Active 43</span>
                  <span><b style={{color:'#ef4444'}}>◼</b> Blacklisted 4</span>
                  <span><b style={{color:'#6366f1'}}>◼</b> DNC 3</span>
                  <span><b style={{color:'#94a3b8'}}>◼</b> Inactive 7</span>
                </div>
              </div>
            </div>
            {/* Bar chart */}
            <div className="rpt-card">
              <div className="rpt-card-title">Load Pipeline — Revenue vs Cost</div>
              <div className="rpt-bars">
                {bars.map(({m,r,c})=>(
                  <div key={m} className="rpt-bar-grp">
                    <div className="rpt-bar-pair">
                      <div className="rpt-bar-r" style={{height:`${r}%`}}/>
                      <div className="rpt-bar-c" style={{height:`${c}%`}}/>
                    </div>
                    <span className="rpt-bar-label">{m}</span>
                  </div>
                ))}
              </div>
              <div className="rpt-bar-legend">
                <span><b style={{color:'#3b82f6'}}>◼</b> Revenue</span>
                <span><b style={{color:'#f59e0b'}}>◼</b> Cost</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── AI Agents data ──────────────────────────────── */
const aiAgents = [
  {icon:'🤖',name:'AI Dispatch Assistant',save:'3–6 hrs saved daily',
   bullets:['Find carriers & post loads automatically','Match & assign by rate, rating & lane','Send rate confirmations instantly','Update customers on every status change','Assign drivers without dispatcher input']},
  {icon:'📞',name:'AI Voice Employee',save:'Runs 24 / 7',
   bullets:['Answers every incoming & missed call','Books loads and gives shipment updates','Schedules pickups & negotiates basic rates','Transfers priority calls to humans automatically']},
  {icon:'💰',name:'AI Rate Negotiator',save:'50 carriers at once',
   bullets:['Calls 50 carriers simultaneously','Negotiates rates on your behalf','Selects cheapest qualified carrier','Logs every call, rate & outcome automatically']},
  {icon:'🔍',name:'AI Carrier Finder',save:'Results in seconds',
   bullets:['Enter any lane — get instant ranked matches','Best rate · highest rating · fastest transit','FMCSA score & insurance auto-verified','Real-time availability confirmation']},
  {icon:'📊',name:'AI Smart Pricing',save:'Win more bids',
   bullets:['Market rate prediction by lane & date','Recommended customer quote generation','Carrier cost & profit margin forecast','Win-probability scoring before you quote']},
  {icon:'💬',name:'AI Customer Service',save:'No agent needed',
   bullets:['Instant GPS position & ETA replies 24/7','Delay reason & re-route explanations','POD delivery confirmations on demand','Works on email, SMS & customer portal']},
  {icon:'📄',name:'AI Document Reader',save:'2+ hrs/day',
   bullets:['Reads Rate Cons, BOLs & PODs instantly','Extracts invoices & carrier packets','Auto-fills every TMS field from PDFs','Flags missing or expired documents']},
  {icon:'🧾',name:'AI Invoice Automation',save:'Fully automated billing',
   bullets:['Auto-creates invoices on delivery','Sends invoices & matches payments','Detects and blocks duplicate payments','Chases unpaid invoices proactively']},
  {icon:'🛡️',name:'AI Fraud Detection',save:'Zero-tolerance protection',
   bullets:['Double-brokering detection in real time','MC authority & FMCSA verification','Insurance validation & expiry checks','Blacklist & suspicious behavior monitoring']},
  {icon:'✉️',name:'AI Email Assistant',save:'1–3 hrs/day',
   bullets:['Reads "need a truck" load request emails','Creates full load records automatically','Adds customers, routes & documents','Replies to rate confirmations instantly']},
  {icon:'🔗',name:'AI Load Matching',save:'Maximum fill rate',
   bullets:['Matches thousands of loads to carriers','Optimized by rate, ETA & reliability score','Reduces empty miles significantly','Real-time capacity & availability updates']},
  {icon:'⏱️',name:'AI Driver ETA',save:'±15 min accuracy',
   bullets:['Live traffic & weather route adjustment','HOS & mandatory rest break tracking','Construction & road closure alerts','Proactive customer ETA notifications']},
  {icon:'📈',name:'AI Profit Optimizer',save:'10–30% margin gains',
   bullets:['Identifies low-margin lanes & customers','Recommends better carrier options','Shows where revenue is being lost','Weekly profit improvement reports']},
  {icon:'📱',name:'AI Sales Agent',save:'Runs autonomously',
   bullets:['Auto-calls target shippers & companies','Books demo appointments automatically','Qualifies leads by volume & lane type','Adds contacts & notes to CRM instantly']},
  {icon:'🚛',name:'AI Carrier Recruiting',save:'Build your network',
   bullets:['Calls owner-operators at scale','Qualifies by equipment, location & insurance','Verifies MC authority automatically','Auto-onboards qualified carriers to TMS']},
  {icon:'🗺️',name:'AI Lane Intelligence',save:'Strategic edge',
   bullets:['Hot lanes, cheap lanes & dead-head mapping','Seasonal demand & rate forecasting','Margin trend analysis by corridor','Expansion opportunity identification']},
  {icon:'🔧',name:'AI Predictive Maintenance',save:'Prevent breakdowns',
   bullets:['Tire, oil & filter replacement predictions','Breakdown risk scoring by carrier','Maintenance history & reliability tracking','Alert carriers before issues cause delays']},
  {icon:'📦',name:'AI Load Builder',save:'Dispatch in seconds',
   bullets:['Type a request in plain English','AI creates the full load record & stops','Multi-stop dispatch planning generated','Documents & confirmations sent instantly']},
  {icon:'✅',name:'AI Compliance Assistant',save:'Stay audit-ready',
   bullets:['DOT & HOS compliance monitoring','Insurance expiration alerts before lapses','Driver file & drug test tracking','IFTA reports generated automatically']},
] as const;

function AIAgents() {
  const featured = aiAgents.slice(0,3);
  const grid = aiAgents.slice(3);
  return (
    <section className="ai-sec" id="ai-hub">
      <div className="ai-inner">
        <div className="ai-hdr">
          <span className="eyebrow ai-eyebrow">AI Intelligence Suite</span>
          <h2 className="ai-h2">19 AI Agents.<br/><span>One Platform.</span></h2>
          <p className="ai-sub">Every role in your freight operation has a dedicated AI — dispatching, calling, pricing, tracking, invoicing, compliance, and sales. Running 24/7 without extra headcount.</p>
          <div className="ai-counts">
            {[['19','AI Agents'],['24/7','Always On'],['50+','Calls at Once'],['0','Extra Hires']].map(([n,l])=>(
              <div key={l} className="ai-cnt"><b>{n}</b><small>{l}</small></div>
            ))}
          </div>
        </div>

        <div className="ai-feat">
          {featured.map(({icon,name,save,bullets})=>(
            <div key={name} className="ai-feat-card">
              <div className="ai-feat-top">
                <span className="afc-icon">{icon}</span>
                <span className="ai-save">{save}</span>
              </div>
              <h3>{name}</h3>
              <ul>{bullets.map(b=><li key={b}>{b}</li>)}</ul>
            </div>
          ))}
        </div>

        <div className="ai-grid">
          {grid.map(({icon,name,bullets})=>(
            <div key={name} className="ai-card">
              <span className="ai-card-icon">{icon}</span>
              <h4>{name}</h4>
              <ul>{(bullets as readonly string[]).slice(0,4).map(b=><li key={b}>{b}</li>)}</ul>
            </div>
          ))}
        </div>

        <div className="ai-cta-row">
          <p>Every agent connects to the same data, same loads, same customers.</p>
          <a className="btn" href="#contact">Book a Demo — See All 19 Agents →</a>
        </div>
      </div>
    </section>
  );
}

/* ── Activity Ticker ─────────────────────────────── */
const tickerEvents = [
  {c:'g', label:'Load #10057 BOOKED', detail:'Dallas TX → Chicago IL · Dry Van · $3,500'},
  {c:'b', label:'AI Carrier Match',   detail:'MCX Freight confirmed · Reefer · $2,140'},
  {c:'g', label:'Load #10044 DELIVERED', detail:'Charlotte, NC · On Time ✓'},
  {c:'a', label:'Quote Q-01038 Sent', detail:'Blue Ridge Agricultural · Awaiting approval'},
  {c:'r', label:'Delay Alert',        detail:'Load #10051 · Memphis TN · ETA +2h · Customer notified'},
  {c:'g', label:'Carrier Onboarded', detail:'MC #821447 verified · Insurance confirmed'},
  {c:'b', label:'AI Rate Match',      detail:'Chicago→Houston Reefer avg $2,840 · 14 carriers found'},
  {c:'g', label:'Load #10056 DISPATCHED', detail:'Driver confirmed pickup · ETA on track'},
  {c:'a', label:'New Quote Request',  detail:'New Orleans→Denver · 48k Flatbed · Needs pricing'},
  {c:'g', label:'Invoice PAID',       detail:'INV-01019 · $3,872.05 · Cardinal Distribution'},
  {c:'p', label:'AI Call Complete',   detail:'Lone Star Beverages check call · No issues reported'},
];

function ActivityTicker() {
  const all = [...tickerEvents, ...tickerEvents];
  return (
    <div className="ticker-wrap">
      <div className="ticker-badge">LIVE</div>
      <div className="ticker-track">
        {all.map(({c,label,detail},i)=>(
          <span key={i} className="t-item">
            <span className={`t-dot t${c}`}/>
            <strong>{label}</strong> — {detail}
            <span style={{color:'#334155',padding:'0 6px'}}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Load Pipeline Section ───────────────────────── */
function LoadPipeline() {
  const stops:[string,string][] = [
    ['Quote','done'],['Booked','done'],['Dispatch','done'],['Transit','now'],['Delivered',''],
  ];
  return (
    <section className="pipeline-sec">
      <div className="pipeline-grid">
        <div className="pipeline-text">
          <span className="eyebrow">Load Lifecycle</span>
          <h2>From quote to delivery — fully automated.</h2>
          <p>Transa tracks every load through 5 automated stages. Dispatchers get real-time status, customers get proactive ETA updates, and carriers receive instant check calls — zero manual effort required.</p>
          <div className="pipe-kpis">
            <div className="pipe-kpi"><b>4.2 min</b><small>Avg carrier match</small></div>
            <div className="pipe-kpi"><b>98%</b><small>On-time delivery</small></div>
            <div className="pipe-kpi"><b>Zero</b><small>Manual check calls</small></div>
          </div>
        </div>
        <div className="lcd">
          <div className="lcd-top">
            <span className="lcd-id">Load #PRO-010048</span>
            <span className="st st-intransit">In Transit</span>
          </div>
          <div className="lcd-rt">📍 Dallas, TX → 📍 Chicago, IL</div>
          <div className="lcd-pills">
            <span className="lcd-pill">🚛 Dry Van</span>
            <span className="lcd-pill">📏 1,304 mi</span>
            <span className="lcd-pill">💰 $3,500</span>
            <span className="lcd-pill">📈 28.6%</span>
          </div>
          <div className="lcd-pipe">
            <div className="lcd-dashes"/>
            <div className="lcd-prog"/>
            <div className="lcd-mover">🚛</div>
            <div className="lcd-stops">
              {stops.map(([label,state])=>(
                <div key={label} className={`lcd-stop${state?' '+state:''}`}>
                  <div className="lcd-node"/>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lcd-feed">
            <div className="lcd-ev"><span className="ev-dot ev-g"/>Driver confirmed pickup — 8:42 AM</div>
            <div className="lcd-ev"><span className="ev-dot ev-b"/>AI check call complete — carrier on route</div>
            <div className="lcd-ev"><span className="ev-dot ev-a"/>Customer notified — ETA 2:30 PM tomorrow</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Showcase Tabs ───────────────────────────────── */
const tabs = [
  {id:'s1',icon:'📊',title:'Live Dashboard',desc:'Real-time command center — loads, revenue, margins, ops alerts, all in one view.'},
  {id:'s2',icon:'📦',title:'Load Management',desc:'Track every shipment from booking to delivery with full margin and rate visibility.'},
  {id:'s3',icon:'💬',title:'CRM & Quotes',desc:'AI-generated quotes from emails, instant approval workflow, and auto-conversion to loads.'},
  {id:'s4',icon:'📈',title:'Reports & Analytics',desc:'Revenue, gross profit, carrier performance, and lane trends — automatically updated.'},
];

function Showcase() {
  return (
    <section className="section showcase" id="accounting">
      <span className="eyebrow">Platform</span>
      <h2>The complete freight operating system.</h2>
      <p>Every screen your team needs — dispatch, loads, quotes, customers, billing, and reports — in one connected AI-powered platform.</p>

      <div className="showcase-tabs">
        <input type="radio" name="scr" id="s1" defaultChecked />
        <input type="radio" name="scr" id="s2" />
        <input type="radio" name="scr" id="s3" />
        <input type="radio" name="scr" id="s4" />

        <div className="tab-nav">
          {tabs.map(({id,icon,title,desc})=>(
            <label key={id} className="tab-nav-item" htmlFor={id}>
              <span className="tab-icon">{icon}</span>
              <div><b>{title}</b><p>{desc}</p></div>
            </label>
          ))}
        </div>

        <div className="tab-screens">
          <div className="tab-screen ts-1">
            <BrowserFrame url="nexgen.transa.ai/dashboard" large><DashboardScreen /></BrowserFrame>
          </div>
          <div className="tab-screen ts-2">
            <BrowserFrame url="nexgen.transa.ai/loads" large><LoadsScreen /></BrowserFrame>
          </div>
          <div className="tab-screen ts-3">
            <BrowserFrame url="nexgen.transa.ai/crm/quotes" large><CRMScreen /></BrowserFrame>
          </div>
          <div className="tab-screen ts-4">
            <BrowserFrame url="nexgen.transa.ai/reports" large><ReportsScreen /></BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Existing components ─────────────────────────── */
function Stat({ value, label }: { value: string; label: string }) {
  return <div className="stat"><span>{value}</span><p>{label}</p></div>;
}

function Dashboard() {
  const items = ['Load #12345 picked up in Dallas','Load #12344 in transit to St. Louis','Load #12343 delivered in Chicago','Load #12342 delay alert in Memphis'];
  return (
    <section className="dashboard" id="demo">
      <aside className="side">
        <img src="/transa-logo.svg" alt="Transa logo" />
        <nav>{['Dashboard','Loads','Dispatch','Carriers','Tracking','Documents','Analytics','Invoices','Reports','Settings'].map((x,i)=><a href="#demo" className={i===0?'active':''} key={x}>{x}</a>)}</nav>
      </aside>
      <main className="dash-main">
        <div className="dash-top">
          <h2>Live Operations Dashboard <span className="live-badge">LIVE</span></h2>
          <div className="icons">⌕ 🔔 👤 →</div>
        </div>
        <div className="cards">
          {['Active Loads|128|+12% vs last week','Delivered|96|+18% vs last week','In Transit|32|+5% vs last week','Total Revenue|$1.24M|+21% vs last week'].map(s=>{const [a,b,c]=s.split('|');return <div className="mini" key={a}><small>{a}</small><b>{b}</b><em>{c}</em></div>})}
        </div>
        <div className="dash-grid">
          <div className="map"><h3>Loads Map</h3><div className="route"><span></span><i></i><b></b></div></div>
          <div className="activity"><h3>Recent Activity</h3>{items.map((a,i)=><p key={a}><span>{i+1}</span>{a}</p>)}<a href="#contact">View all activity →</a></div>
          <div className="ai">
            <strong>AI Assistant</strong>
            <div className="aiwave">
              {[10,18,28,14,32,22,36,12,26,20,34,10,24,30,32,16,10,24,18,28].map((h,i)=>(
                <div key={i} className="aiwave-bar" style={{height:`${h}px`,animationDelay:`${(i*.07).toFixed(2)}s`}}/>
              ))}
            </div>
            <p>I found 12 carriers matching your Dallas, TX → Chicago, IL load. Best rate: $2,840.</p>
            <a href="#contact">View Matches →</a>
          </div>
        </div>
      </main>
    </section>
  );
}

/* ── Page ────────────────────────────────────────── */
export default function Home() {
  return <>
    <header className="header">
      <a className="brand" href="#top" aria-label="Transa home"><img src="/transa-logo-dark.svg" alt="Transa" /></a>
      <nav>{nav.map(([label,href])=><a href={href} key={label}>{label}</a>)}</nav>
      <div className="header-actions"><a className="primary" href="#contact">Book a Demo →</a></div>
    </header>
    <ActivityTicker />

    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <span className="pill">✦ AI-Powered Freight Operating System</span>
          <h1>Move Smarter.<br/>Deliver <mark>Better.</mark></h1>
          <p>Transa TMS AI automates dispatch, carrier sourcing, tracking, documents, and back-office operations so freight teams can scale faster with less effort.</p>
          <div className="actions"><a className="btn" href="#contact">Book a Demo →</a><a className="watch" href="#demo">Watch Demo ▶</a></div>
        </div>
        <div className="truck-card">
          <div className="pin dallas">📍 Dallas, TX</div>
          <div className="pin chicago">📍 Chicago, IL</div>
          <div className="truck">🚛</div>
          <div className="eta-card">
            <span className="eta-label">ETA</span>
            <span className="eta-value">4h 23m</span>
            <span className="eta-status">On Schedule</span>
          </div>
          <div className="hero-notif hn1"><span className="hn-dot hn-g"/>✅ Carrier confirmed · MCX Freight · $2,140</div>
          <div className="hero-notif hn2"><span className="hn-dot hn-r"/>⚠ Delay · Load #10051 · Memphis +2h</div>
          <div className="hero-notif hn3"><span className="hn-dot hn-b"/>💰 Quote approved · $3,630 · Step Deck</div>
        </div>
      </section>

      <section className="feature-row" id="product">
        {features.map(([icon,title,text])=><article key={title}><div>{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="stats">
        <Stat value="70%" label="Fewer Manual Calls"/>
        <Stat value="2–5x" label="More Loads / Dispatcher"/>
        <Stat value="98%" label="On-Time Performance"/>
        <Stat value="30%+" label="Higher Profitability"/>
      </section>

      <LoadPipeline />
      <Dashboard />
      <Showcase />
      <AIAgents />

      <section className="trusted" aria-label="Trusted logistics companies">
        {['TQL','C.H. ROBINSON','XPO','LANDSTAR ★','J.B. HUNT','Echo'].map(l=><b key={l}>{l}</b>)}
      </section>

      <section className="section" id="solutions">
        <span className="eyebrow">Solutions</span>
        <h2>Built for freight teams that move fast.</h2>
        <div className="grid3">{solutions.map(([t,d])=><article className="panel" key={t}><h3>{t}</h3><p>{d}</p><a href="#contact">Talk to sales →</a></article>)}</div>
      </section>

      <section className="section integrations">
        <span className="eyebrow">Integrations</span>
        <h2>Easy integrations. Maximum efficiency.</h2>
        <div className="marquee-outer">
          <div className="marquee-track">
            {['DAT','Truckstop','MacroPoint','EDI','Google Maps','QuickBooks','SAP','Stripe','FourKites','Project44','Email','Phone','Samsara','ELD Connect','FMCSA'].map(x=><span key={x}>{x}</span>)}
            {['DAT','Truckstop','MacroPoint','EDI','Google Maps','QuickBooks','SAP','Stripe','FourKites','Project44','Email','Phone','Samsara','ELD Connect','FMCSA'].map(x=><span key={x+'_d'}>{x}</span>)}
          </div>
        </div>
      </section>

      <section className="section" id="resources">
        <span className="eyebrow">Resources</span>
        <h2>Learn how AI improves freight operations.</h2>
        <div className="grid3">{resources.map(([t,d])=><article className="panel" key={t}><h3>{t}</h3><p>{d}</p><a href="#contact">Request access →</a></article>)}</div>
      </section>

      <section className="section testimonials">
        <span className="eyebrow">Customers</span>
        <h2>What our customers say</h2>
        <div className="grid3">{[
          ['Mike Johnson','Operations Manager, FleetGo','Transa has transformed our dispatch process. We book more loads with less effort.'],
          ['Sarah Williams','CEO, Swift Logistics','The AI voice negotiator saves our team hours every day.'],
          ['David Brown','Director of Logistics, RoadLink','Real-time tracking and alerts keep our customers updated.'],
        ].map(([n,r,q])=><article key={n}><p>"{q}"</p><b>{n}</b><small>{r}</small></article>)}</div>
      </section>

      <section className="section company" id="company">
        <span className="eyebrow">Company</span>
        <h2>Professional AI infrastructure for modern logistics.</h2>
        <p>Transa is designed for brokers, dispatchers, and 3PL operators who want fewer manual calls, cleaner workflows, faster carrier sourcing, and better visibility across every shipment.</p>
      </section>

      <section className="cta" id="contact">
        <img className="cta-mark" src="/transa-mark.svg" alt="Transa mark"/>
        <div><h2>Ready to transform your freight operations?</h2><p>Book a demo and see how Transa can fit your workflow.</p></div>
        <a className="btn" href="mailto:sales@transa.ai?subject=Transa%20Demo%20Request">Book a Demo →</a>
        <a className="watch" href="tel:+15125550127">Talk to Sales ☎</a>
      </section>

      <section className="section contact-form" id="login">
        <span className="eyebrow">Contact</span>
        <h2>Send a demo request</h2>
        <form action="mailto:sales@transa.ai" method="post" encType="text/plain">
          <input name="name" placeholder="Your name" required/>
          <input name="email" type="email" placeholder="Work email" required/>
          <input name="company" placeholder="Company name"/>
          <textarea name="message" placeholder="Tell us what you need automated"></textarea>
          <button className="primary" type="submit">Send Request</button>
        </form>
      </section>
    </main>

    <footer>
      <img src="/transa-logo.svg" alt="Transa"/>
      <p>AI-powered TMS built for modern freight brokers and 3PLs.</p>
      <div>{nav.map(([label,href])=><a href={href} key={label}>{label}</a>)}<a href="mailto:sales@transa.ai">Contact</a></div>
      <small>© 2026 Transa TMS AI. All rights reserved.</small>
    </footer>
  </>;
}
