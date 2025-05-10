module.exports = (name) => `
  <div style="max-width:600px;margin:0 auto;padding:24px;font-family:Arial,sans-serif;border:1px solid transparent;border-radius:12px;background-color:transparent;color:#f3f4f6;">
    <style>
      @media (prefers-color-scheme: dark) {
        body, .darkmode {
          background-color: transparent !important;
          color: #f3f4f6 !important;
        }
        .btn {
          background-color: #047857 !important;
          color: #fff !important;
        }
      }
    </style>
    <div class="darkmode" style="text-align:center;">
      <img
        src="https://junkcycle.ca/logo.png"
        alt="JunkCycle Logo"
        width="200"
        style="
          display:block;
          margin: 0 auto;
          max-width:100%;
          height:auto;
          filter: invert(0) !important;
          mix-blend-mode: normal !important;
          background-color: transparent !important;
        "
      />
      <h2 style="color:#047857;margin:20px 0 8px;">Welcome to JunkCycle, ${name}!</h2>
      <p style="font-size:16px;margin-bottom:16px;">You're officially on the waitlist 🎉</p>
    </div>

    <div style="margin-top:24px;font-size:15px;line-height:1.6;color:#d1d5db;">
      <p>
        We’re thrilled to have you with us. JunkCycle is all about smarter, cleaner waste solutions—and you're now part of that movement.
      </p>
      <p>
        We'll notify you when we launch and keep you posted on any exciting updates!
      </p>
    </div>

    <div style="text-align:center;margin-top:30px;">
      <a href="https://junkcycle.ca" class="btn" style="display:inline-block;padding:12px 24px;background-color:#047857;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;">
        Visit Our Website
      </a>
    </div>

    <hr style="margin:40px 0;border:none;border-top:1px solid #374151;">

    <div style="text-align:center;background-color:transparent;padding:16px;border-radius:8px;">
      <p style="font-size:12px;color:#9ca3af;margin-bottom:8px;">
        Stay connected:
      </p>
      <a href="https://www.instagram.com/hellojunkcycle/" style="margin:0 8px;" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/24/174/174855.png" alt="Instagram" width="24" />
      </a>
      <a href="https://www.linkedin.com/in/junk-cycle-31ba82362" style="margin:0 8px;" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/24/174/174857.png" alt="LinkedIn" width="24" />
      </a>
      <p style="font-size:12px;color:#9ca3af;margin-top:12px;">
        JunkCycle • waitlist@junkcycle.ca • <a href="https://junkcycle.ca" style="color:#9ca3af;text-decoration:underline;">junkcycle.ca</a>
      </p>
    </div>
  </div>
`;
