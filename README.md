<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VOIDBONE SDK | Technical Reference</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Noto+Serif+JP:wght@300;500&display=swap" rel="stylesheet">
    <style>
        :root { --bg: #050505; --text: #a0a0a0; --gold: #D4AF37; --border: rgba(212,175,55,0.3); }
        body { background: var(--bg); color: var(--text); font-family: 'Noto Serif JP', serif; margin: 0; padding: 20px; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; border: 1px solid var(--border); padding: 40px 30px; box-shadow: 0 0 30px rgba(0,0,0,0.9); }
        
        h1, h2 { font-family: 'Cinzel', serif; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0; }
        h1 { font-size: 24px; border-bottom: 1px solid var(--border); padding-bottom: 20px; margin-bottom: 30px; text-align: center; }
        h2 { font-size: 14px; margin-top: 40px; margin-bottom: 15px; border-left: 3px solid var(--gold); padding-left: 15px; }
        
        p { margin-bottom: 15px; font-size: 13px; text-align: justify; }
        
        ul { list-style: none; padding: 0; }
        li { margin-bottom: 8px; font-size: 13px; border-bottom: 1px dashed #222; padding-bottom: 5px; }
        li strong { color: #ccc; }
        li::before { content: "› "; color: var(--gold); margin-right: 5px; }
        
        .btn { display: block; width: 100%; text-align: center; margin-top: 40px; padding: 15px 0; border: 1px solid var(--gold); color: var(--gold); text-decoration: none; font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: 2px; transition: 0.3s; background: rgba(212,175,55,0.05); }
        .btn:hover { background: var(--gold); color: #000; }
        
        .disclaimer { margin-top: 40px; font-size: 11px; color: #555; text-align: center; border-top: 1px solid #222; padding-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>VOIDBONE SDK<br><span style="font-size:11px; color:#666;">Technical Reference</span></h1>
        
        <h2>Project Overview</h2>
        <p>The VOIDBONE SDK implements the <strong>NE System</strong> logic (Patent Pending: 2026-XXXX), which holds generated output until explicit human approval is granted.</p>
        <p>The system separates generation (draft) from execution (approval) to support predictable and controlled operation in AI-assisted workflows.</p>

        <h2>Core Architecture</h2>
        <ul>
            <li><strong>Logical Separation:</strong> The generative layer and the execution layer are logically decoupled.</li>
            <li><strong>HOLD Logic (Pattern A):</strong> Output execution is paused when predefined risk conditions are detected.</li>
            <li><strong>Audit Support (State B):</strong> Reference data structures support recording approval metadata (implementation-dependent).</li>
        </ul>

        <h2>Design Scope</h2>
        <ul>
            <li>Execution control logic only</li>
            <li>No content rewriting or masking</li>
            <li>No external communication required for core operation</li>
        </ul>

        <h2>License & Rights</h2>
        <ul>
            <li><strong>Rights Holder:</strong> NEXT BASE</li>
            <li><strong>Patent Status:</strong> Filed January 30, 2026, Japan (Patent Pending)</li>
        </ul>

        <a href="https://8475488513970norisan.gumroad.com/l/hkrzd" class="btn">OFFICIAL DISTRIBUTION (GUMROAD)</a>
        
        <div class="disclaimer">
            <strong>Disclaimer</strong><br>
            This repository provides technical design information only.<br>
            It does not guarantee regulatory approval, legal outcomes, or operational results.<br>
            Final responsibility remains with the user.
        </div>
    </div>
</body>
</html>


