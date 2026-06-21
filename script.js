// CORE APPLICATION STATE INFRASTRUCTURE
const STAT_MAPPING = {
    quality: 'field-quality',
    status: 'field-status'
};

const appState = {
    activeView: 'dashboard-view',
    clients: [],
    filters: {
        search: '',
        quality: '',
        priority: '',
        status: '',
        channel: '',
        sort: 'newest'
    }
};

// INITIAL SEED DATABASE (12 DETAILED PROFILES)
const initialClients = [
    { id: "c1", name: "Apex Auto Repair", city: "Chicago", classification: "Other", value: 3200, email: "service@apexauto.com", whatsapp: "13125550143", phone: "3125550143", url: "", instagram: "", facebook: "", priority: "Immediate Attention", status: "New Contact", channel: "Found on Google Maps", catchup: "2026-06-20", notes: "Completely missing an optimized landing domain. Needs localized search configuration mapping templates immediately.", webAssessment: "Missing a Website" },
    { id: "c2", name: "Bella Vita Trattoria", city: "Boston", classification: "Restaurant", value: 4500, email: "manager@bellavitarestaurant.com", whatsapp: "16175550291", phone: "6175550291", url: "http://bellavitaboston.local", instagram: "@bellavita_boston", facebook: "", priority: "Normal Speed", status: "Outreach Conducted", channel: "Found on Instagram", catchup: "2026-06-21", notes: "Old legacy site layout cuts off navigation paths on mobile views. Lacks structured menu schema layouts.", webAssessment: "Needs a Redesign" },
    { id: "c3", name: "Green Leaf Landscaping", city: "Austin", classification: "Other", value: 2800, email: "info@greenleafatx.com", whatsapp: "15125550742", phone: "5125550742", url: "https://greenleafatx.com", instagram: "", facebook: "", priority: "Low Urgency", status: "Project Won 🥳", channel: "Personal Referral", catchup: "2026-07-15", notes: "Clean, fast layout built with fluid grid structures. Keeping in database for referral tracking parameters.", webAssessment: "Solid Existing Website" },
    { id: "c4", name: "Downtown Dental Care", city: "Clinic", classification: "Clinic", value: 6000, email: "contact@downtowndental.com", whatsapp: "13035550911", phone: "3035550911", url: "https://downtowndental.com", instagram: "", facebook: "", priority: "Immediate Attention", status: "Expressed Interest", channel: "Incoming Request", catchup: "2026-06-22", notes: "Lacks streamlined direct calendar scheduling integrations. Site layout feels text-heavy and outdated.", webAssessment: "Needs a Redesign" },
    { id: "c5", name: "Summit Fitness Studio", city: "Seattle", classification: "Gym", value: 3500, email: "hello@summitfit.com", whatsapp: "12065550384", phone: "2065550384", url: "", instagram: "@summit_seattle", facebook: "", priority: "Normal Speed", status: "New Contact", channel: "Found on Instagram", catchup: "2026-06-26", notes: "Instagram contains great content vectors, but they are leaking direct incoming traffic because they lack a capture link.", webAssessment: "Missing a Website" },
    { id: "c6", name: "Vanguard Law Group", city: "Miami", classification: "Other", value: 7500, email: "intake@vanguardlegal.com", whatsapp: "13055550102", phone: "3055550102", url: "https://vanguardlegal.com", instagram: "", facebook: "", priority: "Low Urgency", status: "Outreach Conducted", channel: "Other Venue", catchup: "2026-06-19", notes: "Excellent layout execution framework. Keeping saved as an design architecture layout benchmark.", webAssessment: "Solid Existing Website" },
    { id: "c7", name: "Radiant Skin Boutique", city: "Phoenix", classification: "Salon", value: 2200, email: "glow@radiantskin.com", whatsapp: "16025550831", phone: "6025550831", url: "", instagram: "", facebook: "", priority: "Immediate Attention", status: "Expressed Interest", channel: "Found on Google Maps", catchup: "2026-06-21", notes: "Google business portal maps accurately, but lacks any custom online reservation or booking gateway pipelines.", webAssessment: "Missing a Website" },
    { id: "c8", name: "Main Street Bakery", city: "Portland", classification: "Cafe", value: 1800, email: "baker@mainstbakes.com", whatsapp: "15035550472", phone: "5035550472", url: "http://mainstreetbaking.com", instagram: "", facebook: "", priority: "Normal Speed", status: "Project Won 🥳", channel: "Found on Facebook", catchup: "2026-07-02", notes: "Contract signed for localized storefront optimization framework setup.", webAssessment: "Needs a Redesign" },
    { id: "c9", name: "Anchor HVAC Systems", city: "San Diego", classification: "Other", value: 5200, email: "tech@anchorhvac.com", whatsapp: "16195550619", phone: "6195550619", url: "", instagram: "", facebook: "", priority: "Immediate Attention", status: "New Contact", channel: "Found on Google Maps", catchup: "2026-06-15", notes: "High local transaction capabilities but missing clean interactive form capturing pipelines.", webAssessment: "Missing a Website" },
    { id: "c10", name: "Prism Photography", city: "Nashville", classification: "Other", value: 2900, email: "studioprism@gmail.com", whatsapp: "16155550244", phone: "6155550244", url: "https://prismphoto.myportfolio.com", instagram: "@prism_nash", facebook: "", priority: "Normal Speed", status: "Outreach Conducted", channel: "Found on Instagram", catchup: "2026-06-25", notes: "Hosted portfolio configuration renders slow. Needs conversion layout strategies.", webAssessment: "Needs a Redesign" },
    { id: "c11", name: "Elite Pet Grooming", city: "Dallas", classification: "Other", value: 2100, email: "paws@elitegrooming.com", whatsapp: "12145550361", phone: "2145550361", url: "", instagram: "", facebook: "", priority: "Low Urgency", status: "Expressed Interest", channel: "Found on Facebook", catchup: "2026-06-23", notes: "Owner wants to link active Facebook appointment pipelines onto a single standalone localized structure.", webAssessment: "Missing a Website" },
    { id: "c12", name: "Ironclad Roofing Co.", city: "Atlanta", classification: "Other", value: 8500, email: "estimates@ironcladroof.com", whatsapp: "14045550992", phone: "4045550992", url: "https://ironcladroof.com", instagram: "", facebook: "", priority: "Immediate Attention", status: "Project Won 🥳", channel: "Incoming Request", catchup: "2026-08-01", notes: "Pragmatic enterprise build. Completed custom quote landing matrix deployment integration rules.", webAssessment: "Solid Existing Website" }
];

// APPLICATION ENTRY CONTROL INSTANTIATION
document.addEventListener('DOMContentLoaded', () => {
    initializeApplicationStorage();
    registerDOMEventBindings();
    renderApplicationLayers();
});

// INITIAL STORAGE REGISTRATION LAYER
function initializeApplicationStorage() {
    const retainedState = localStorage.getItem('freelancer_crm_state');
    if (retainedState) {
        try {
            appState.clients = JSON.parse(retainedState);
        } catch (e) {
            appState.clients = [...initialClients];
            saveStateToStorage();
        }
    } else {
        appState.clients = [...initialClients];
        saveStateToStorage();
    }
}

function saveStateToStorage() {
    localStorage.setItem('freelancer_crm_state', JSON.stringify(appState.clients));
}

// REGISTER ALL INTERACTIVE CORE DOM EVENT LISTENERS
function registerDOMEventBindings() {
    // 1. Sidebar Deep Router Engines
    document.querySelectorAll('.sidebar-nav .nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const explicitTarget = e.currentTarget.getAttribute('data-target');
            routeViewNavigation(explicitTarget);
        });
    });

    // 2. Interactive Dashboard Metric Card Filter Directives
    document.querySelectorAll('.metrics-grid .metric-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const filterType = e.currentTarget.getAttribute('data-filter-type');
            const filterValue = e.currentTarget.getAttribute('data-filter-value');
            
            // Clear current toolbar state
            resetFilteringState();
            
            if (filterType !== 'all' && filterType && filterValue) {
                appState.filters[filterType] = filterValue;
                // Sync dynamic select components explicitly
                const inputElementId = filterType === 'quality' ? 'filter-quality' : 'filter-status';
                const selectDOM = document.getElementById(inputElementId);
                if (selectDOM) selectDOM.value = filterValue;
            }
            
            // Route viewport focus instantly onto Client Workspace
            routeViewNavigation('tracker-view');
        });
    });

    // 3. Client Management Toolbelt Form Modifiers
    document.getElementById('search-input').addEventListener('input', (e) => {
        appState.filters.search = e.target.value;
        renderClientGridWorkspace();
    });
    document.getElementById('filter-quality').addEventListener('change', (e) => {
        appState.filters.quality = e.target.value;
        renderClientGridWorkspace();
    });
    document.getElementById('filter-priority').addEventListener('change', (e) => {
        appState.filters.priority = e.target.value;
        renderClientGridWorkspace();
    });
    document.getElementById('filter-status').addEventListener('change', (e) => {
        appState.filters.status = e.target.value;
        renderClientGridWorkspace();
    });
    document.getElementById('filter-channel').addEventListener('change', (e) => {
        appState.filters.channel = e.target.value;
        renderClientGridWorkspace();
    });
    document.getElementById('filter-sort').addEventListener('change', (e) => {
        appState.filters.sort = e.target.value;
        renderClientGridWorkspace();
    });
    document.getElementById('clear-filters-btn').addEventListener('click', () => {
        resetFilteringState();
        renderClientGridWorkspace();
        triggerNotification("All workspace filter options reset.");
    });

    // 4. Modal Drawer Controllers
    document.querySelectorAll('.open-form-btn').forEach(b => {
        b.addEventListener('click', () => openFormDrawerNode());
    });
    document.getElementById('close-drawer-btn').addEventListener('click', closeFormDrawerNode);
    document.getElementById('cancel-drawer-btn').addEventListener('click', closeFormDrawerNode);
    document.getElementById('form-drawer-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'form-drawer-overlay') closeFormDrawerNode();
    });
    document.getElementById('client-submission-form').addEventListener('submit', commitClientFormPayload);

    // 5. Portability System Configurations
    document.getElementById('download-backup-btn').addEventListener('click', downloadApplicationBackup);
    document.getElementById('upload-backup-trigger').addEventListener('click', () => {
        document.getElementById('backup-file-input').click();
    });
    document.getElementById('backup-file-input').addEventListener('change', uploadApplicationBackup);

    // 6. Action Preview Clipboard Gateway Buttons
    document.getElementById('preview-copy-btn').addEventListener('click', () => {
        const textToCapture = document.getElementById('preview-text-block').innerText;
        navigator.clipboard.writeText(textToCapture)
            .then(() => triggerNotification('Content text block captured into system clipboard layers.'))
            .catch(() => triggerNotification('Failed to execute automatic capture pipeline.'));
    });
}

// ROUTING MATRIX MANAGEMENT ENGINE
function routeViewNavigation(targetPanelID) {
    appState.activeView = targetPanelID;
    
    // Core Layout CSS Class Mutations
    document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav .nav-btn').forEach(btn => btn.classList.remove('active'));
    
    const focalNode = document.getElementById(targetPanelID);
    if (focalNode) focalNode.classList.add('active');
    
    const navigationalTrigger = document.querySelector(`.sidebar-nav .nav-btn[data-target="${targetPanelID}"]`);
    if (navigationalTrigger) navigationalTrigger.classList.add('active');
    
    // Render targeted visual dependencies lazily
    renderApplicationLayers();
}

// CLIENT FILTER STATE SYNC UTILITIES
function resetFilteringState() {
    appState.filters = { search: '', quality: '', priority: '', status: '', channel: '', sort: 'newest' };
    document.getElementById('search-input').value = '';
    document.getElementById('filter-quality').value = '';
    document.getElementById('filter-priority').value = '';
    document.getElementById('filter-status').value = '';
    document.getElementById('filter-channel').value = '';
    document.getElementById('filter-sort').value = 'newest';
}

// MULTI-LAYER ENGINE DISPATCH ARCHITECTURE
function renderApplicationLayers() {
    calculateAnalyticalMetrics();
    renderClientGridWorkspace();
    renderChronologicalSchedules();
    renderInspirationShowcase();
}

// CORE METRICS MATHEMATICAL PARSING MATRIX
function calculateAnalyticalMetrics() {
    const collection = appState.clients;
    
    // Total calculation parameters
    document.getElementById('stat-total-leads').innerText = collection.length;
    
    // Website structural breakdown matrices
    document.getElementById('stat-no-website').innerText = collection.filter(c => c.webAssessment === 'Missing a Website').length;
    document.getElementById('stat-needs-improvement').innerText = collection.filter(c => c.webAssessment === 'Needs a Redesign').length;
    document.getElementById('stat-good-websites').innerText = collection.filter(c => c.webAssessment === 'Solid Existing Website').length;
    
    // Pipeline configuration counts
    document.getElementById('stat-contacted').innerText = collection.filter(c => c.status === 'Outreach Conducted').length;
    document.getElementById('stat-interested').innerText = collection.filter(c => c.status === 'Expressed Interest').length;
    document.getElementById('stat-clients-won').innerText = collection.filter(c => c.status === 'Project Won 🥳').length;
    
    // Core pipeline currency value formulation rules
    const totalAccumulatedValuation = collection
        .filter(c => c.status !== 'Archived / Not Interested')
        .reduce((accum, asset) => accum + (Number(asset.value) || 0), 0);
        
    document.getElementById('total-pipeline-value').innerText = `$${totalAccumulatedValuation.toLocaleString()}`;
}

// WORKSPACE ELEMENT CARD RENDERING HUB
function renderClientGridWorkspace() {
    const visualMountContainer = document.getElementById('client-cards-container');
    if (!visualMountContainer) return;
    
    const filteredDataset = getProcessedClientCollection(false);
    
    if (filteredDataset.length === 0) {
        visualMountContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 1rem; background: var(--bg-card); border-radius:12px; border:1px solid var(--border-color);">
                No business profiles match your current search parameter settings.
            </div>`;
        return;
    }
    
    visualMountContainer.innerHTML = filteredDataset.map(account => generateStructuralCardMarkup(account)).join('');
}

// SCHEDULE BOARD RENDERING ENGINE
function renderChronologicalSchedules() {
    const overdueTarget = document.getElementById('schedule-overdue-container');
    const todayTarget = document.getElementById('schedule-today-container');
    const upcomingTarget = document.getElementById('schedule-upcoming-container');
    
    if (!overdueTarget || !todayTarget || !upcomingTarget) return;
    
    // Normalize system clock strings to date timestamps
    const referenceClock = new Date();
    referenceClock.setHours(0, 0, 0, 0);
    
    const overdueBuffer = [];
    const todayBuffer = [];
    const upcomingBuffer = [];
    
    appState.clients.forEach(c => {
        if (!c.catchup || c.status === 'Archived / Not Interested') return;
        
        const instanceTimestamp = new Date(c.catchup + 'T00:00:00');
        instanceTimestamp.setHours(0, 0, 0, 0);
        
        const structuralMiniItem = `
            <div class="schedule-mini-card" onclick="openDirectWorkspaceProfile('${c.id}')">
                <div class="mini-card-title">${escapeHTML(c.name)}</div>
                <div class="mini-card-date">${c.catchup}</div>
            </div>`;
            
        if (instanceTimestamp.getTime() < referenceClock.getTime()) {
            overdueBuffer.push(structuralMiniItem);
        } else if (instanceTimestamp.getTime() === referenceClock.getTime()) {
            todayBuffer.push(structuralMiniItem);
        } else {
            upcomingBuffer.push(structuralMiniItem);
        }
    });
    
    overdueTarget.innerHTML = overdueBuffer.length ? overdueBuffer.join('') : '<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:1rem 0;">Clear</div>';
    todayTarget.innerHTML = todayBuffer.length ? todayBuffer.join('') : '<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:1rem 0;">No tasks today</div>';
    upcomingTarget.innerHTML = upcomingBuffer.length ? upcomingBuffer.join('') : '<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:1rem 0;">No upcoming tasks</div>';
}

// INSPIRATION SHOWCASE GALLERY RENDER CHANNEL
function renderInspirationShowcase() {
    const targetGallery = document.getElementById('inspiration-cards-container');
    if (!targetGallery) return;
    
    const inspirationItems = appState.clients.filter(c => c.webAssessment === 'Saved as Design Inspiration');
    
    if (!inspirationItems.length) {
        targetGallery.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 4rem 1rem; background: var(--bg-card); border-radius:12px; border:1px solid var(--border-color);">
                No designs saved here yet. Mark a business profile's quality status as <b>"Saved as Design Inspiration"</b> to compile your portfolio benchmark matrix.
            </div>`;
        return;
    }
    
    targetGallery.innerHTML = inspirationItems.map(account => generateStructuralCardMarkup(account)).join('');
}

// PROCESS APPLIED FILTER AND SORT MATRIX
function getProcessedClientCollection(isolateInspirationOnly = false) {
    let sourceCollection = [...appState.clients];
    
    if (isolateInspirationOnly) {
        return sourceCollection.filter(c => c.webAssessment === 'Saved as Design Inspiration');
    }
    
    // Core pipeline configuration criteria execution paths
    return sourceCollection.filter(c => {
        const query = appState.filters.search.toLowerCase().trim();
        const matchesSearch = !query || 
            c.name.toLowerCase().includes(query) ||
            c.city.toLowerCase().includes(query) ||
            c.email.toLowerCase().includes(query) ||
            c.phone.toLowerCase().includes(query) ||
            c.classification.toLowerCase().includes(query);
            
        const matchesQuality = !appState.filters.quality || c.webAssessment === appState.filters.quality;
        const matchesPriority = !appState.filters.priority || c.priority === appState.filters.priority;
        const matchesStatus = !appState.filters.status || c.status === appState.filters.status;
        const matchesChannel = !appState.filters.channel || c.channel === appState.filters.channel;
        
        return matchesSearch && matchesQuality && matchesPriority && matchesStatus && matchesChannel;
    }).sort((alphaAsset, betaAsset) => {
        // Advanced sorting algorithms mapping select dropdown targets
        switch (appState.filters.sort) {
            case 'oldest': return 1; 
            case 'alpha': return alphaAsset.name.localeCompare(betaAsset.name);
            case 'alpha-rev': return betaAsset.name.localeCompare(alphaAsset.name);
            case 'value': return (Number(betaAsset.value) || 0) - (Number(alphaAsset.value) || 0);
            case 'catchup':
                if (!alphaAsset.catchup) return 1;
                if (!betaAsset.catchup) return -1;
                return new Date(alphaAsset.catchup) - new Date(betaAsset.catchup);
            case 'newest':
            default:
                return -1;
        }
    });
}

// GENERATE CARD COMPONENT MARKUP STRINGS
function generateStructuralCardMarkup(client) {
    let priorityClassModifier = 'prio-normal';
    if (client.priority === 'Immediate Attention') priorityClassModifier = 'prio-high';
    if (client.priority === 'Low Urgency') priorityClassModifier = 'prio-low';
    
    return `
        <div class="client-item-card" data-client-id="${client.id}">
            <div class="card-main-payload">
                <div class="card-top-row">
                    <h4 class="biz-title">${escapeHTML(client.name)}</h4>
                    <span class="priority-pip ${priorityClassModifier}" title="Priority Level: ${client.priority}"></span>
                </div>
                <div class="meta-sub-badge">${escapeHTML(client.classification)} &bull; ${escapeHTML(client.city)}</div>
                
                ${client.notes ? `<div class="audit-notes-excerpt">${escapeHTML(truncateString(client.notes, 140))}</div>` : ''}
                
                <div class="badge-grouping">
                    <span class="ui-pill pill-quality">${escapeHTML(client.webAssessment)}</span>
                    <span class="ui-pill pill-status">${escapeHTML(client.status)}</span>
                    <span class="ui-pill pill-channel">${escapeHTML(client.channel)}</span>
                    <span class="ui-pill pill-value">$${(Number(client.value) || 0).toLocaleString()}</span>
                </div>
                
                <div class="contact-data-links">
                    ${client.email ? `<a href="mailto:${client.email}" class="data-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>${escapeHTML(client.email)}</a>` : ''}
                    ${client.phone ? `<a href="tel:${client.phone}" class="data-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>${escapeHTML(client.phone)}</a>` : ''}
                    ${client.url ? `<a href="${client.url}" target="_blank" class="data-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>${escapeHTML(client.url)}</a>` : ''}
                </div>
            </div>
            
            <div class="card-action-footer">
                <div class="footer-utility-group">
                    <button class="footer-btn" onclick="openDirectWorkspaceProfile('${client.id}')" title="Modify Record Configurations">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="footer-btn btn-delete" onclick="executeProfilePurge('${client.id}')" title="Purge Record Safely">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
                <div class="footer-utility-group" style="gap:0.375rem;">
                    <button class="engine-trigger-btn" onclick="triggerContentSuite('${client.id}', 'whatsapp')">WhatsApp</button>
                    <button class="engine-trigger-btn" onclick="triggerContentSuite('${client.id}', 'email')">Email</button>
                    <button class="engine-trigger-btn" onclick="triggerContentSuite('${client.id}', 'proposal')">Proposal</button>
                </div>
            </div>
        </div>`;
}

// FORM DRAWER UTILITIES
function openFormDrawerNode(targetProfileID = null) {
    const formNode = document.getElementById('client-submission-form');
    formNode.reset();
    document.getElementById('field-id').value = '';
    document.getElementById('drawer-form-title').innerText = 'Add Prospective Client';
    
    if (targetProfileID) {
        const foundAsset = appState.clients.find(c => c.id === targetProfileID);
        if (foundAsset) {
            document.getElementById('field-id').value = foundAsset.id;
            document.getElementById('field-name').value = foundAsset.name;
            document.getElementById('field-classification').value = foundAsset.classification;
            document.getElementById('field-phone').value = foundAsset.phone || '';
            document.getElementById('field-whatsapp').value = foundAsset.whatsapp || '';
            document.getElementById('field-email').value = foundAsset.email || '';
            document.getElementById('field-city').value = foundAsset.city;
            document.getElementById('field-url').value = foundAsset.url || '';
            document.getElementById('field-instagram').value = foundAsset.instagram || '';
            document.getElementById('field-facebook').value = foundAsset.facebook || '';
            document.getElementById('field-quality').value = foundAsset.webAssessment;
            document.getElementById('field-priority').value = foundAsset.priority;
            document.getElementById('field-status').value = foundAsset.status;
            document.getElementById('field-value').value = foundAsset.value;
            document.getElementById('field-catchup').value = foundAsset.catchup || '';
            document.getElementById('field-channel').value = foundAsset.channel;
            document.getElementById('field-notes').value = foundAsset.notes || '';
            
            document.getElementById('drawer-form-title').innerText = `Modify ${foundAsset.name}`;
        }
    }
    
    document.getElementById('form-drawer-overlay').classList.add('active');
}

function closeFormDrawerNode() {
    document.getElementById('form-drawer-overlay').classList.remove('active');
}

function openDirectWorkspaceProfile(id) {
    openFormDrawerNode(id);
}

// COMMIT MODAL FORM INPUTS DATA STATE
function commitClientFormPayload(e) {
    e.preventDefault();
    
    const trackingID = document.getElementById('field-id').value;
    const nameData = document.getElementById('field-name').value.trim();
    
    const accountPayload = {
        id: trackingID || 'client_' + Date.now(),
        name: nameData,
        classification: document.getElementById('field-classification').value,
        phone: document.getElementById('field-phone').value.trim(),
        whatsapp: document.getElementById('field-whatsapp').value.trim(),
        email: document.getElementById('field-email').value.trim(),
        city: document.getElementById('field-city').value.trim(),
        url: document.getElementById('field-url').value.trim(),
        instagram: document.getElementById('field-instagram').value.trim(),
        facebook: document.getElementById('field-facebook').value.trim(),
        webAssessment: document.getElementById('field-quality').value,
        priority: document.getElementById('field-priority').value,
        status: document.getElementById('field-status').value,
        value: Math.abs(parseInt(document.getElementById('field-value').value, 10)) || 0,
        catchup: document.getElementById('field-catchup').value,
        channel: document.getElementById('field-channel').value,
        notes: document.getElementById('field-notes').value.trim()
    };
    
    if (trackingID) {
        const structuralIndex = appState.clients.findIndex(c => c.id === trackingID);
        if (structuralIndex !== -1) appState.clients[structuralIndex] = accountPayload;
        triggerNotification(`Updated structural profile fields for ${nameData}`);
    } else {
        appState.clients.unshift(accountPayload);
        triggerNotification(`New record registered for ${nameData}`);
    }
    
    saveStateToStorage();
    closeFormDrawerNode();
    renderApplicationLayers();
}

// PURGE ACTIONS SAFEGUARDS
function executeProfilePurge(id) {
    const targetAsset = appState.clients.find(c => c.id === id);
    if (!targetAsset) return;
    
    if (confirm(`Are you absolutely sure you want to permanently delete "${targetAsset.name}"? This action cannot be undone.`)) {
        appState.clients = appState.clients.filter(c => c.id !== id);
        saveStateToStorage();
        renderApplicationLayers();
        triggerNotification('Account records permanently dropped from system memory.');
    }
}

// SMART GENERATION SUITE MODULES
function triggerContentSuite(clientId, engineStrategy) {
    const client = appState.clients.find(c => c.id === clientId);
    if (!client) return;
    
    let renderedTitle = '';
    let textOutputBlock = '';
    const bizType = client.classification.toLowerCase();
    
    if (engineStrategy === 'whatsapp') {
        renderedTitle = `WhatsApp Direct Outreach: ${client.name}`;
        textOutputBlock = `Hey there! Is this the team at ${client.name}? 👋\n\nI was looking up local business resources here in ${client.city} and came across your profile. I noticed your team doesn't have an active web presence online right now to handle direct reservations and showcases.\n\nI run an independent web agency nearby and just compiled a couple of interface strategies specifically designed for local ${bizType} models to capture incoming customer revenue. Would love to send over a 2-minute visual layout mock if you are open to checking it out? No obligations at all!\n\nBest,`;
        
        if (client.whatsapp) {
            const formattedURL = `https://wa.me/${client.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(textOutputBlock)}`;
            setTimeout(() => {
                if (confirm("Launch native WhatsApp configuration gateway now?")) window.open(formattedURL, '_blank');
            }, 500);
        }
    } 
    else if (engineStrategy === 'email') {
        renderedTitle = `Cold Outreach Architecture: ${client.name}`;
        textOutputBlock = `Subject: Quick digital observation regarding ${client.name}\n\nDear Team,\n\nI hope this brief note finds the management team at ${client.name} doing excellent.\n\nMy name is an independent digital designer operating here in ${client.city}. I am writing because I ran a performance audit on your digital infrastructure profile and spotted critical revenue leaks. Namely, your current mobile interface cuts off navigation paths and lacks optimized loading channels.\n\nFixing these accessibility parameters directly affects your neighborhood retention. I built a custom user interface blueprint designed for local ${bizType} ventures to capture this volume.\n\nLet me know if you have 10 minutes this week for a quick walkthrough review.\n\nSincerely,`;
        
        if (client.email) {
            const mailtoURL = `mailto:${client.email}?subject=${encodeURIComponent("Quick digital observation regarding " + client.name)}&body=${encodeURIComponent(textOutputBlock.split('\n\n').slice(1).join('\n\n'))}`;
            setTimeout(() => {
                if (confirm("Initialize native system mailto link launcher?")) window.location.href = mailtoURL;
            }, 500);
        }
    } 
    else if (engineStrategy === 'proposal') {
        renderedTitle = `Development Proposal: ${client.name}`;
        textOutputBlock = `==================================================\nPRODUCTION CODE PROPOSAL & STRATEGY DESIGN\n==================================================\nPrepared For: ${client.name}\nTarget Classification Scope: High-Conversion Modern ${client.classification} Interface\nLocalization Vector: Local Community Delivery Framework (${client.city})\n\n--------------------------------------------------\n1. SCOPE OF PRODUCTION DELIVERABLES\n--------------------------------------------------\n* Full bespoke, zero-dependency engineering architecture\n* Mobile-first responsive grid system optimization layout\n* Local SEO structural Schema markup injection\n* Integrated booking reservation/menu utility matrix mapping\n\n--------------------------------------------------\n2. ADVANCED UI SPECIFICATION ENGINE FEATURES\n--------------------------------------------------\n* Fluid CSS custom interactive micro-interactions\n* Accessible font layout configurations matching compliance mandates\n* Single-click local map interaction and call gateways\n\n--------------------------------------------------\n3. PROPOSED TIMELINE & MILESTONES\n--------------------------------------------------\n* Phase 1: Interactive Wireframes & Prototyping (Weeks 1-2)\n* Phase 2: Core Engineering & Architecture Dev (Weeks 3-4)\n* Phase 3: Domain Launch, Verification, & Polish (Weeks 5-6)\n\n--------------------------------------------------\n4. INVESTMENT MATRICES\n--------------------------------------------------\n* Single Flat-Rate Commercial Dev Agreement: $${client.value.toLocaleString()}\n* Includes 90 Days post-launch optimization support safeguards.\n\n==================================================\nGenerated automatically via Freelancer CRM Pro. Commercial property confidential.`;
    }
    
    document.getElementById('preview-doc-title').innerText = renderedTitle;
    document.getElementById('preview-text-block').innerText = textOutputBlock;
    
    document.getElementById('preview-workspace-empty').classList.add('hidden');
    document.getElementById('preview-workspace-active').classList.remove('hidden');
    
    routeViewNavigation('preview-view');
    triggerNotification('Outbound system copy compiled into workspace preview engine.');
}

// DATA PORTABILITY UTILITY BACKUPS
function downloadApplicationBackup() {
    const outputString = JSON.stringify(appState.clients, null, 2);
    const dataBlob = new Blob([outputString], { type: 'application/json' });
    const virtualURL = URL.createObjectURL(dataBlob);
    
    const downLink = document.createElement('a');
    downLink.href = virtualURL;
    downLink.download = `Freelancer_CRM_Backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(downLink);
    downLink.click();
    document.body.removeChild(downLink);
    URL.revokeObjectURL(virtualURL);
    
    triggerNotification('Database archive backup file downloaded successfully.');
}

function uploadApplicationBackup(e) {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;
    
    const fileReaderEngine = new FileReader();
    fileReaderEngine.onload = function(event) {
        try {
            const cleanParsedData = JSON.parse(event.target.result);
            if (Array.isArray(cleanParsedData)) {
                appState.clients = cleanParsedData;
                saveStateToStorage();
                renderApplicationLayers();
                triggerNotification('App backup restored successfully. Core UI updated.');
            } else {
                triggerNotification('Format structurally invalid. Validation rejected.');
            }
        } catch (err) {
            triggerNotification('Failed parsing raw file input properties.');
        }
    };
    fileReaderEngine.readAsText(uploadedFile);
    e.target.value = ''; 
}

// REUSABLE TOAST ALERTS INTERFACE CHANNELS
function triggerNotification(msgText) {
    const container = document.getElementById('toast-hub');
    if (!container) return;
    
    const notificationNode = document.createElement('div');
    notificationNode.className = 'toast-message';
    notificationNode.innerText = msgText;
    
    container.appendChild(notificationNode);
    setTimeout(() => {
        notificationNode.style.opacity = '0';
        notificationNode.style.transform = 'translateY(8px) scale(0.98)';
        notificationNode.style.transition = 'all 0.15s ease';
        setTimeout(() => notificationNode.remove(), 200);
    }, 3500);
}

// SYSTEM STRINGS HELPERS & PROTECTION ESCAPES
function truncateString(str, lengthLimit) {
    if (str.length <= lengthLimit) return str;
    return str.slice(0, lengthLimit) + '...';
}

function escapeHTML(stringVal) {
    if (!stringVal) return '';
    return String(stringVal)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}