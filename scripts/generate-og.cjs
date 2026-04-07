// Run with: node scripts/generate-og.js
const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

const W = 1200;
const H = 630;

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

async function generate() {
    const canvas = createCanvas(W, H);
    const ctx = canvas.getContext("2d");

    // ── Background ──────────────────────────────────────────────────────────
    ctx.fillStyle = "#010313";
    ctx.fillRect(0, 0, W, H);

    // Subtle dot grid
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    for (let x = 60; x < W; x += 60) {
        for (let y = 60; y < H; y += 60) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // ── Left accent bar ──────────────────────────────────────────────────────
    ctx.fillStyle = "#2237F1";
    ctx.fillRect(80, 135, 3, 190);

    // ── Label ───────────────────────────────────────────────────────────────
    ctx.fillStyle = "#C7FA50";
    ctx.font = "500 12px sans-serif";
    ctx.letterSpacing = "3px";
    ctx.fillText("MIDWESTERN DESIGN SYSTEM", 100, 162);

    // ── Headline ────────────────────────────────────────────────────────────
    ctx.letterSpacing = "-1px";
    ctx.fillStyle = "#F6F7FE";
    ctx.font = "600 58px sans-serif";
    ctx.fillText("Build consistent", 100, 238);
    ctx.fillText("products, faster.", 100, 308);

    // ── Subtitle ────────────────────────────────────────────────────────────
    ctx.letterSpacing = "0px";
    ctx.fillStyle = "#A9A9A9";
    ctx.font = "400 20px sans-serif";
    ctx.fillText("A React component library built on Untitled UI,", 100, 368);
    ctx.fillText("styled to the Midwestern brand.", 100, 396);

    // ── Right — Icon mark (M shape rendered with canvas paths) ───────────────
    // Icon viewBox is 0 0 282 150 — scale to ~200px wide, centered at x=960
    const iconW = 200;
    const iconH = iconW * (150 / 282);
    const iconX = 880;
    const iconY = (H - iconH) / 2 - 20;
    const scaleX = iconW / 282;
    const scaleY = iconH / 150;

    // Subtle glow behind icon
    const grd = ctx.createRadialGradient(960, H / 2 - 20, 20, 960, H / 2 - 20, 160);
    grd.addColorStop(0, "rgba(34,55,241,0.18)");
    grd.addColorStop(1, "rgba(34,55,241,0)");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(960, H / 2 - 20, 160, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(iconX, iconY);
    ctx.scale(scaleX, scaleY);
    ctx.fillStyle = "#F6F7FE";

    // Path 1: right chevron shape
    ctx.beginPath();
    ctx.moveTo(218.994, 0.133);
    ctx.lineTo(111.936, 106.318);
    ctx.lineTo(111.936, 150);
    ctx.lineTo(155.932, 150);
    ctx.lineTo(218.994, 87.452);
    ctx.lineTo(218.994, 150);
    ctx.lineTo(281.25, 150);
    ctx.lineTo(281.25, 17.535);
    ctx.lineTo(263.705, 0.133);
    ctx.closePath();
    ctx.fill();

    // Path 2: left chevron shape
    ctx.beginPath();
    ctx.moveTo(160.417, 0);
    ctx.lineTo(107.013, 0);
    ctx.lineTo(0, 106.141);
    ctx.lineTo(0, 149.822);
    ctx.lineTo(43.996, 149.822);
    ctx.lineTo(178.125, 17.535);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    // ── Bottom pill tags ─────────────────────────────────────────────────────
    const tags = ["23 components", "Brand tokens", "TypeScript", "Light & dark mode"];
    tags.forEach((tag, i) => {
        const tw = 188;
        const th = 40;
        const tx = 100 + i * (tw + 16);
        const ty = H - 100;

        ctx.fillStyle = "rgba(255,255,255,0.07)";
        roundRect(ctx, tx, ty, tw, th, 8);
        ctx.fill();

        ctx.strokeStyle = "rgba(255,255,255,0.10)";
        ctx.lineWidth = 1;
        roundRect(ctx, tx, ty, tw, th, 8);
        ctx.stroke();

        ctx.fillStyle = "#F6F7FE";
        ctx.font = "500 13px sans-serif";
        ctx.letterSpacing = "0px";
        ctx.textAlign = "center";
        ctx.fillText(tag, tx + tw / 2, ty + 25);
    });

    ctx.textAlign = "left";

    // ── Save ─────────────────────────────────────────────────────────────────
    const buf = canvas.toBuffer("image/png");
    const out = path.join(__dirname, "../public/og-image.png");
    fs.writeFileSync(out, buf);
    console.log(`✓ OG image written to public/og-image.png (${W}×${H})`);
}

generate().catch((e) => { console.error(e); process.exit(1); });
