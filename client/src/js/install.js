const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // defer the prompt until later and show the button to install the app
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // grab the deferredPrompt and if it does not exist exit out
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    };
    // show the prompt then clear it and hide the button
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // cleare the prompt
    window.deferredPrompt = null;
});
