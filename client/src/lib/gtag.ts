type GtagEvent = (event: string, action: string, params: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: GtagEvent;
  }
}

const WHATSAPP_CONVERSION_ID = "AW-17858992627/dE0eCPSIgu0bEPOz6sNC";

export const reportWhatsAppConversion = (
  url: string,
  options?: { openInNewTab?: boolean },
) => {
  let didNavigate = false;

  const navigate = () => {
    if (didNavigate) return;
    didNavigate = true;
    if (!url) return;

    if (options?.openInNewTab) {
      window.open(url, "_blank", "noopener");
      return;
    }

    window.location.assign(url);
  };

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: WHATSAPP_CONVERSION_ID,
      event_callback: navigate,
    });

    // Fallback in case the callback is not invoked.
    window.setTimeout(navigate, 1000);
    return false;
  }

  navigate();
  return false;
};
