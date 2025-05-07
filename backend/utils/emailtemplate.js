module.exports = (name) => `
  <div style="max-width:600px;margin:0 auto;padding:24px;font-family:Arial,sans-serif;border:1px solid #e0e0e0;border-radius:12px;background-color:#ffffff;color:#1f2937;">
    <style>
      @media (prefers-color-scheme: dark) {
        body, .darkmode {
          background-color: #111827 !important;
          color: #f3f4f6 !important;
        }
        .btn {
          background-color: #047857 !important;
          color: #fff !important;
        }
      }
    </style>
    <div class="darkmode" style="text-align:center;">
      <img src="https://junkcycle.ca/logo.png" alt="JunkCycle Logo" width="160" style="display:block;margin:auto;" />
      <h2 style="color:#047857;margin-bottom:8px;">Welcome to JunkCycle, ${name}!</h2>
      <p style="font-size:16px;">You're officially on the waitlist 🎉</p>
    </div>
    <div style="margin-top:24px;">
      <p style="font-size:15px;line-height:1.6;">
        We're thrilled to have you with us. JunkCycle is all about smarter, cleaner waste solutions—and you're now part of that movement. We’ll notify you when we launch!
      </p>
    </div>
    <div style="text-align:center;margin-top:30px;">
      <a href="https://junkcycle.ca" class="btn" style="display:inline-block;padding:12px 24px;background-color:#047857;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;">
        Visit Our Website
      </a>
    </div>
    <hr style="margin:40px 0;border:none;border-top:1px solid #e5e7eb;">
    <p style="font-size:12px;text-align:center;color:#6b7280;">
      JunkCycle • waitlist@junkcycle.ca • <a href="https://junkcycle.ca" style="color:#6b7280;text-decoration:underline;">junkcycle.ca</a>
    </p>
  </div>
`;