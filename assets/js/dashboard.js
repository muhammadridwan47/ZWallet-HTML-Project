const more = document.getElementById("more");
const dismiss = document.getElementById("dismiss");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const btnNotification = document.getElementById("btn-notification");
const btnNotification2 = document.getElementById("btn-notification2");
const notification = document.getElementById("notification");
const dismissNotification = document.getElementById(
    "dismiss-notification"
);

more.onclick = (e) => {
    const sidebarActive = sidebar.className.match("active");
    const sidebarOverlayActive = sidebarOverlay.className.match("active");

    if (!sidebarActive && !sidebarOverlayActive) {
        sidebar.classList.add("active");
        sidebarOverlay.classList.add("active");
    }
};

dismiss.onclick = (e) => {
    const sidebarActive = sidebar.className.match("active");
    const sidebarOverlayActive = sidebarOverlay.className.match("active");

    if (sidebarActive && sidebarOverlayActive) {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    }
};

sidebarOverlay.onclick = () => {
    const sidebarActive = sidebar.className.match("active");
    const sidebarOverlayActive = sidebarOverlay.className.match("active");

    if (sidebarActive && sidebarOverlayActive) {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    }
};


btnNotification.onclick = function () {
    const isNotificationActive = notification.className.match("active");
    const sidebarOverlayActive = sidebarOverlay.className.match("active");
    const sidebarActive = sidebar.className.match("active");

    if (isNotificationActive) notification.classList.remove("active");
    else notification.classList.add("active");

    if (sidebarActive && sidebarOverlayActive) {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    }
};

btnNotification2.onclick = function () {
    const isNotificationActive = notification.className.match("active");

    if (isNotificationActive) notification.classList.remove("active");
    else notification.classList.add("active");
};

dismissNotification.onclick = function () {
    const isNotificationActive = notification.className.match("active");

    if (isNotificationActive) notification.classList.remove("active");
};