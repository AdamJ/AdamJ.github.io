---
title: 'ArchParser: Architectural Drawing Analysis Platform'
date: git Last Modified
abbreviation: 'archparser'
description: 'Full-stack TypeScript application for OCR-based architectural drawing analysis and management.'
eleventyNavigation:
  key: Development
  parent: Development
  order: 1
customCss: slides.css
---

<section>
  <h2 class="text-h2 no-underline">Project Overview</h2>
  <div class="card">
    <p>
      <span class="text-h6 mr-1">Project Type:</span>Personal/Open Source
    </p>
    <p>
      <span class="text-h6 mr-1">Role:</span>Product Designer &amp; Full-Stack Developer
    </p>
    <p>
      <span class="text-h6 mr-1">Timeline:</span>2025 (Ongoing)
    </p>
    <p>
      <span class="text-h6 mr-1">Development Partner:</span>
      Built with Claude Code (Anthropic's AI development assistant)
    </p>
    <p>
      <span class="text-h6 mr-1">THE CHALLENGE:</span>
      Construction project managers at Component Assembly Systems needed a way to efficiently extract metadata from hundreds of architectural drawing PDFs. Manual data entry from title blocks (drawing numbers, revision dates, project names) was time-consuming, error-prone, and didn't scale for projects with 500+ page drawing sets. No existing tools could handle the specialized OCR requirements or support custom title block layouts across different architectural firms.
    </p>
    <p>
      <span class="text-h6 mr-1">MY ROLE:</span>
      I designed and developed ArchParser, a full-stack TypeScript application that automates the extraction of drawing metadata using OCR technology. I created both the technical architecture and user experience, focusing on reliability, performance, and flexibility to handle diverse document formats.
    </p>
    <p>
      <span class="text-h6 mr-1">THE SOLUTION:</span>
      ArchParser is a monorepo application with a NestJS backend for OCR processing and a React/PatternFly frontend for drawing management. The system features customizable OCR templates with a visual template creator, memory-optimized processing for large PDFs, and an optional AI chatbot for semantic search. The platform successfully processes drawing sets of 500+ pages while maintaining accurate metadata extraction.
    </p>
    <p>
      <span class="text-h6 mr-1">THE IMPACT:</span>
      <br/>
      <ul>
        <li>Automated metadata extraction from architectural drawings, eliminating manual data entry</li>
        <li>Successfully processes 500+ page PDF drawing sets with memory optimization</li>
        <li>Visual template creator allows non-technical users to configure OCR extraction regions</li>
        <li>Revision tracking system maintains drawing set history and version comparisons</li>
        <li>Real-time WebSocket progress updates keep users informed during long-running OCR jobs</li>
        <li>Centralized path management system ensures reliability across deployment environments</li>
        <li>Open-source project serving as portfolio demonstration of full-stack capabilities</li>
      </ul>
    </p>
  </div>
</section>
<section>
  <h2>The Development Process</h2>
  <p class="text-callout">Unlike traditional design-first projects, ArchParser required simultaneous development of both technical architecture and user experience. The process was highly iterative, driven by real-world testing with large PDF sets and continuous feedback from construction project planners and managers.</p>
  <div class="card">
    <p class="text-h6">Development approach:</p>
    <ol class="ml-4">
      <li class="mt-2"><strong>Problem validation & requirements gathering</strong>
        <ul class="ml-4">
          <li>Interviewed construction project planners and managers about their drawing management workflows</li>
          <li>Identified pain points: manual data entry, inconsistent title block formats, large file sizes</li>
          <li>Determined core requirements: OCR accuracy, template flexibility, performance at scale</li>
        </ul>
      </li>
      <li class="mt-2"><strong>Technology stack selection</strong>
        <ul class="ml-4">
          <li>Chose TypeScript monorepo for type safety across frontend and backend</li>
          <li>Selected <a href="https://nestjs.com/" target="_blank" alt="Link to NestJS site">NestJS</a> for backend (familiar enterprise patterns from AWS experience)</li>
          <li>Used React with <a href="https://www.patternfly.org" target="_blank" alt="Link to PatternFly site">PatternFly UI</a> (leveraging my Red Hat design system expertise) - later changed to <a href="https://www.radix-ui.com/" target="_blank" alt="Link to RadixUI site">RadixUI</a></li>
          <li>Implemented <a href="https://tesseract-ocr.github.io/" target="_blank" alt="Link to Tesseract GitHub repository">Tesseract.js</a> for client-side OCR processing</li>
        </ul>
      </li>
      <li class="mt-2"><strong>Iterative development with Claude Code</strong>
        <ul class="ml-4">
          <li>Used Claude Code as a development partner for architecture decisions and implementation</li>
          <li>Leveraged AI assistance for complex TypeORM migrations and NestJS module structure</li>
          <li>Rapid prototyping of OCR extraction algorithms with Claude's code generation</li>
          <li>Collaborative debugging of memory optimization and path management issues</li>
        </ul>
      </li>
      <li class="mt-2"><strong>Real-world testing & optimization</strong>
        <ul class="ml-4">
          <li>Tested with actual 500+ page architectural drawing sets from construction projects</li>
          <li>Identified and resolved critical memory constraints through optimization iterations</li>
          <li>Refined OCR accuracy through template system improvements</li>
        </ul>
      </li>
    </ol>
  </div>
  <div class="card mt-4">
    <p class="text-h6">Working with Claude Code as a development partner:
      <ul class="ml-4">
        <li class="mt-2">
          <strong>Architecture & Planning:</strong> Claude helped design the monorepo structure, database schema, and path management system. We discussed trade-offs between different approaches (absolute vs. relative paths, synchronous vs. batch processing) before implementation.
        </li>
        <li class="mt-2">
          <strong>Code Generation & Implementation:</strong> Claude generated boilerplate code for NestJS modules, TypeORM entities, and React components following established patterns. This accelerated development while maintaining consistency.
        </li>
        <li class="mt-2">
          <strong>Problem Solving:</strong> When facing complex issues (memory leaks in OCR processing, path resolution bugs), Claude helped analyze logs, identify root causes, and propose solutions. The collaborative debugging process was particularly valuable for tricky issues like the path management overhaul.
        </li>
        <li class="mt-2">
          <strong>Documentation:</strong> Claude assisted in writing comprehensive documentation (CLAUDE.md, README files, inline comments) that explains not just what the code does, but why architectural decisions were made.
        </li>
        <li class="mt-2">
          <strong>Testing & Quality:</strong> Claude helped write test utilities, fixtures, and unit tests for both frontend and backend. The AI's ability to generate edge cases I hadn't considered improved test coverage.
        </li>
      </ul>
    </p>
  </div>
</section>
<section>
  <h2 id="architecture">Technical Architecture</h2>
  <p class="text-callout">ArchParser is built as a TypeScript monorepo with three primary workspaces: backend (NestJS), frontend (React/Vite), and shared type definitions. The architecture emphasizes type safety, memory efficiency, and extensibility.</p>
  <h3 class="pt-4 mt-4 mb-2">Backend</h3>
  <h4 class="text-h4 mb-2">NestJS</h4>
  <p><strong>Core Modules:</strong></p>
  <ul class="ml-4">
    <li><strong>Drawing Processing Service:</strong> Handles PDF-to-PNG conversion and Tesseract.js OCR extraction</li>
    <li><strong>OCR Template System:</strong> Configurable extraction regions for different title block formats</li>
    <li><strong>Path Management:</strong> Centralized path resolution with environment variable support for deployment portability</li>
    <li><strong>WebSocket Gateway:</strong> Real-time progress updates during OCR processing</li>
    <li><strong>Optional LLM Service:</strong> AI-powered semantic search (Claude, OpenAI, or local Ollama)</li>
  </ul>
  <p class="mt-3"><strong>Database (TypeORM + MySQL):</strong></p>
  <ul class="ml-4">
    <li>Entities: Job, DrawingSet, Drawing, OcrTemplate, KnowledgeChunk</li>
    <li>Supports revision tracking through self-referencing DrawingSet relationships</li>
    <li>Stores relative paths in database for deployment portability</li>
  </ul>
  <h3 class="pt-4 mt-4 mb-2">Frontend</h3>
  <h4 class="text-h4 mb-2">React + RadixUI</h4>
  <p><strong>Key Features:</strong></p>
  <ul class="ml-4">
    <li><strong>Dashboard:</strong> Job listing with pagination, sorting, and filtering</li>
    <li><strong>Upload Workflow:</strong> PDF upload with OCR template selection and classification</li>
    <li><strong>Drawing Review:</strong> Individual drawing detail pages with metadata editing</li>
    <li><strong>Real-time Progress:</strong> WebSocket-powered progress indicator for OCR jobs</li>
    <li><strong>Template Creator:</strong> Visual interface for creating OCR extraction templates</li>
  </ul>
  <p class="mt-3"><strong>UI/UX Decisions:</strong></p>
  <ul class="ml-4 pb-3">
    <li>RadixUI components for accessibility and consistency</li>
    <li>Responsive grid layouts for data-dense tables</li>
    <li>Inline editing for quick metadata corrections</li>
    <li>Mock server support for frontend-only development</li>
  </ul>
  <div class="card pt-3">
    <div class="card-header text-h5">Dashboard</div>
    <div class="card-body">
      <figure class="figure">
        <img src="../../assets/img/archparser_dashboard1.webp" class="figure-img img-fluid rounded" alt="Image of the archparser dashboard" loading="lazy">
      </figure>
    </div>
  </div>
  <h3 class="pt-4 mt-4 mb-2">Template Creator</h3>
  <h4>Standalone Tool</h4>
  <p>Built as a standalone HTML/JavaScript tool using PDF.js, the template creator allows users to:</p>
  <ul class="ml-4">
    <li>Upload a sample PDF and render it in the browser</li>
    <li>Draw rectangular regions on the PDF to define extraction areas</li>
    <li>Label regions (drawing number, title, date, revision, etc.)</li>
    <li>Export template JSON for import into ArchParser</li>
    <li>Works offline with no backend dependency</li>
  </ul>
  <p class="mt-3 pb-3">This tool democratizes OCR template creation—construction managers can create templates without developer assistance.</p>
  <div class="row no-wrap pt-3">
    <div class="card">
      <div class="card-header text-h5">Initial Load</div>
      <div class="card-body">
        <figure class="figure">
        <img src="../../assets/img/archparser_template-creator.webp" class="figure-img img-fluid rounded" alt="Image of the template creator's empty canvas" loading="lazy">
        <figcaption>Empty canvas, ready for PDF</figcaption>
      </figure>
      </div>
    </div>
    <div class="card">
      <div class="card-header text-h5">PDF Loaded</div>
      <div class="card-body">
        <figure class="figure">
        <img src="../../assets/img/archparser_template-creator-loaded.webp" class="figure-img img-fluid rounded" alt="Image of the template creator with a loaded PDF" loading="lazy">
        <figcaption>Document details loaded and ready</figcaption>
      </figure>
      </div>
    </div>
  </div>
</section>
<section>
  <h2 id="visualprogressions">Visual Progressions</h2>
  <p class="mb-4">
    The visual design of Archparser progressed rather quickly, but a consistent idea was in place from the beginning: <strong>get users into their jobs as quickly and easily as possible</strong>.
  </p>
  <div class="card mb-4">
    <div class="card-body">
      <div class="slider">
        <div class="slides">
          <div id="slide-1">
            <img src="../../assets/img/archparser_desktop_0.webp" />
          </div>
          <div id="slide-2">
            <img src="../../assets/img/archparser_desktop_1.webp" />
          </div>
          <div id="slide-3">
            <img src="../../assets/img/archparser_desktop_2.webp" />
          </div>
          <div id="slide-4">
            <img src="../../assets/img/archparser_dashboard1.webp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <h2 id="iterations">Key Iterations & Problem Solving</h2>
  <p class="text-callout">Throughout development, several critical issues emerged that required significant architectural changes. Each iteration improved reliability, performance, or usability based on real-world testing.</p>
  <h3 class="mt-4 mb-2">Iteration 1: Memory Optimization for Large PDFs</h3>
  <div class="card mb-4">
    <div class="card-body">
      <p><strong>Problem:</strong> Processing 500+ page PDFs caused memory exhaustion and server crashes. The initial implementation converted entire PDFs to PNG images in memory before processing.</p>
      <p class="mt-2"><strong>Solution:</strong> Implemented single-page PDF conversion and dynamic batch processing:</p>
      <ul class="ml-4">
        <li>Convert one PDF page at a time instead of the entire document</li>
        <li>Adjust batch sizes based on document size (smaller batches for larger PDFs)</li>
        <li>Add memory monitoring and garbage collection tuning</li>
        <li>Process OCR regions sequentially to prevent memory spikes</li>
      </ul>
      <p class="mt-2"><strong>Result:</strong> Successfully processes 500+ page documents without crashes. Memory-optimized startup script (<code>start-optimized.sh</code>) provides production-ready performance.</p>
    </div>
  </div>
  <h3 class="mt-4 mb-2">Iteration 2: Path Management System Overhaul</h3>
  <div class="card mb-4">
    <div class="card-body">
      <p><strong>Problem:</strong> Processed drawings became disassociated from database records after server restarts. Three root causes identified:</p>
      <ol class="ml-4">
        <li>Inconsistent path resolution between <code>process.cwd()</code> and <code>__dirname</code></li>
        <li>Directory naming mismatch during deletion operations</li>
        <li>Absolute paths in database made system non-portable across environments</li>
      </ol>
      <p class="mt-2"><strong>Solution:</strong> Complete path management overhaul with centralized configuration:</p>
      <ul class="ml-4">
        <li>Created <code>storage.config.ts</code> with centralized path constants</li>
        <li>Implemented <code>toRelativePath()</code> and <code>toAbsolutePath()</code> utilities</li>
        <li>Standardized folder naming: <code>{sanitizedName}_{jobId}</code> format</li>
        <li>Updated all services to use centralized path resolution</li>
        <li>Wrote migration script to convert 373 existing records from absolute to relative paths</li>
      </ul>
      <p class="mt-2"><strong>Result:</strong> System is now portable across deployment environments. Paths resolve correctly regardless of server startup directory. Database can be migrated to new servers without breaking file associations.</p>
    </div>
  </div>
  <h3 class="mt-4 mb-2">Iteration 3: Dashboard UI Enhancement</h3>
  <div class="card mb-4">
    <div class="card-body">
      <p><strong>Problem:</strong> Initial dashboard struggled with high-volume data tables. Users needed better filtering, sorting, and status visualization.</p>
      <p class="mt-2"><strong>Solution:</strong> Comprehensive dashboard refactoring:</p>
      <ul class="ml-4">
        <li>Added independent pagination and sorting for Job and Template tables</li>
        <li>Implemented date range filtering with "Created" and "Updated" pivots</li>
        <li>Added status (Active/Archived) and type (Included/Custom) filters</li>
        <li>Created Kanban-style Monitor Dashboard for job status visualization</li>
        <li>Added Floating Action Button (FAB) for streamlined task creation</li>
        <li>Persisted filter selections in local storage for session continuity</li>
      </ul>
      <p class="mt-2"><strong>Result:</strong> Users can efficiently navigate large datasets. The Kanban view provides at-a-glance status monitoring, while table filters enable rapid data discovery.</p>
    </div>
  </div>
</section>
<section>
  <h2 id="resultsandimpact">Results & Impact</h2>
  <h3>Technical Achievements</h3>
  <p class="mb-4">
    <ul>
      <li><strong>Performance:</strong> Successfully processes 500+ page PDF drawing sets with memory-optimized batch processing</li>
      <li><strong>Accuracy:</strong> OCR template system with configurable regions achieves reliable metadata extraction across diverse title block formats</li>
      <li><strong>Type Safety:</strong> Shared TypeScript interfaces across monorepo prevent runtime errors and improve developer experience</li>
      <li><strong>Real-time Updates:</strong> WebSocket integration provides live progress feedback during long-running OCR jobs</li>
      <li><strong>Portability:</strong> Centralized path management enables deployment across different server environments without configuration changes</li>
      <li><strong>Test Coverage:</strong> 14 backend test suites with 53 tests, plus comprehensive frontend component testing</li>
    </ul>
  </p>
  <h3>User Experience Wins</h3>
  <p class="mb-4">
    <ul>
      <li><strong>Visual Template Creator:</strong> Non-technical users can create OCR templates by drawing regions on PDFs—no code required</li>
      <li><strong>Revision Tracking:</strong> Drawing set relationships enable version comparison and change tracking</li>
      <li><strong>Enterprise UI:</strong> PatternFly components provide accessible, professional interface familiar to enterprise users</li>
      <li><strong>Mock Server:</strong> Frontend developers can work independently without backend/database dependency</li>
      <li><strong>Flexible AI Integration:</strong> Optional LLM features support Claude, OpenAI, or free local Ollama—users choose based on budget and privacy needs</li>
    </ul>
  </p>
  <h3>Development Process Insights</h3>
  <p class="mb-4">
    <ul>
      <li><strong>AI-Assisted Development:</strong> Claude Code accelerated Archparer's development 2-3x through intelligent code generation, debugging assistance, and architectural guidance</li>
      <li><strong>Monorepo Benefits:</strong> Shared types across workspaces to catch integration bugs at compile time rather than runtime</li>
      <li><strong>Iterative Optimization:</strong> Real-world testing with large PDFs revealed performance bottlenecks that wouldn't have been found in small-scale testing</li>
      <li><strong>Documentation-Driven:</strong> Comprehensive CLAUDE.md file serves as both an AI context and a developer onboarding guide</li>
    </ul>
  </p>
  <div class="row no-wrap pt-3">
    <div class="card">
      <div class="card-header text-h5">Set Details</div>
      <div class="card-body">
        <img src="../../assets/img/archparser_drawing-set-details-thumb.webp" class="rounded" alt="Image of the drawing set details page">
      </div>
    </div>
    <div class="card">
      <div class="card-header text-h5">Drawing List</div>
      <div class="card-body">
        <img src="../../assets/img/archparser_drawing-list-thumb.webp" class="rounded" alt="Image of the drawing list page">
      </div>
    </div>
    <div class="card">
      <div class="card-header text-h5">Drawing Details</div>
      <div class="card-body">
        <img src="../../assets/img/archparser_drawing-details-thumb.webp" class="rounded" alt="Image of the drawing details page">
      </div>
    </div>
  </div>
</section>
<divider class="divider"></divider>
<section>
  <div class="card">
    <div class="card-header">
      <h3 class="p-0">What I Learned</h3>
    </div>
    <div class="card-body">
      <p>
        This project provided valuable insights about full-stack development, AI-assisted coding, and building for real-world constraints:
        <ol>
          <li><strong>Memory constraints require proactive optimization.</strong> The initial implementation worked fine for small PDFs but crashed on real-world 500+ page documents. Building with realistic test data from the start would have caught this earlier. Memory profiling and optimization became critical skills.</li>
          <li><strong>AI development assistance is transformative when used strategically.</strong> Claude Code was most valuable for architectural planning, debugging complex issues, and generating boilerplate code. I learned to use AI as a collaborative partner—explaining problems thoroughly, reviewing generated code critically, and iterating on solutions together. The key is maintaining ownership of architectural decisions while leveraging AI for implementation acceleration.</li>
          <li><strong>Path management is harder than it looks.</strong> The path resolution issues taught me that assumptions about working directories break in production. Centralizing path logic and storing relative paths in the database made the system portable and maintainable.</li>
          <li><strong>User empowerment beats technical complexity.</strong> The visual template creator was more impactful than any backend optimization. Enabling non-technical users to configure OCR templates themselves removed a bottleneck and increased adoption. Simple, visual tools often provide more value than sophisticated algorithms.</li>
          <li><strong>Design system expertise translates across contexts.</strong> My experience with design systems paid dividends—I could build an enterprise-grade UI quickly while ensuring accessibility and consistency. Design systems aren't just for design teams; they accelerate solo development too.</li>
          <li><strong>Monorepo structure enforces discipline.</strong> Shared TypeScript interfaces between frontend and backend prevented the API contract drift that plagues many full-stack projects. The initial setup overhead was worth it for the compile-time safety and refactoring confidence.</li>
        </ol>
      </p>
      <p>
        ArchParser demonstrated that full-stack development - especially with AI assistance - enables rapid prototyping and iteration. By combining my design background with technical implementation, I could build and refine features based on direct user feedback without handoff delays. The project serves as both a practical tool for construction project management and a portfolio demonstration of end-to-end product development capabilities.
      </p>
    </div>
  </div>
</section>
<section class="mt-4">
  <div class="card">
    <div class="card-header">
      <h3 class="p-0">Project Links</h3>
    </div>
    <div class="card-body">
      <ul class="list-unstyled">
        <li>
          <a href="https://archparser.adamjolicoeur.me" target="_blank" rel="noopener noreferrer">
            <fa-icon type="duotone" weight="solid" name="code-branch" size="md"></fa-icon>
            Demo Site (no data)
          </a>
        </li>
        <li class="mt-2">
          <a href="https://github.com/Product-Designs/ocr-template-creator" target="_blank" rel="noopener noreferrer">
            <fa-icon type="duotone" weight="solid" name="paintbrush" size="md"></fa-icon>
            Visual Template Creator Tool
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
<section>
  <div class="row justify-content-between">
    <a href="{{ '/designs/alm' | url }}" class="btn btn-outline btn-sm" alt="Navigate to Application Lifecycle Management case study">Previous Case Study</a>
    <a href="{{ '/designs/component-library/' | url }}" class="btn btn-outline btn-sm" alt="Navigate to component library case study">Next Case Study</a>
  </div>
</section>
