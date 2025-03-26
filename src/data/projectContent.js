// Project content data structure that allows for multiple projects
const projects = {
  // Phoenix Codie project
  "phoenix-codie": {
    id: "phoenix-codie",
    title: "Phoenix Codie: Figma-to-React Code Generator",
    date: "March 15, 2023",

    // Table of Contents sections
    sections: [
      {
        id: "project-overview",
        title: "Project Overview",
        isSubheading: false,
      },
      { id: "the-big-problem", title: "The Big Problem", isSubheading: false },
      { id: "key-features", title: "Key Features", isSubheading: false },
      {
        id: "the-plan",
        title: "The Plan: Smarter, Not Harder",
        isSubheading: false,
      },
      {
        id: "alchemist-engine",
        title: "The Alchemist Engine",
        isSubheading: false,
      },
      {
        id: "layout-detection",
        title: "Layout Pattern Detection",
        isSubheading: true,
      },
      { id: "layout-extractor", title: "Layout Extractor", isSubheading: true },
      {
        id: "position-detection",
        title: "Position Detection",
        isSubheading: true,
      },
      { id: "results-impact", title: "Results & Impact", isSubheading: false },
      {
        id: "component-identification",
        title: "Smart Component Identification",
        isSubheading: false,
      },
      { id: "lessons", title: "Lessons From the Grind", isSubheading: false },
      { id: "layouts-tricky", title: "Layouts Are Tricky", isSubheading: true },
      {
        id: "nested-components",
        title: "Nested Components = Chaos",
        isSubheading: true,
      },
      {
        id: "error-handling",
        title: "Error Handling Saves Lives",
        isSubheading: true,
      },
      {
        id: "documentation",
        title: "Documentation Importance",
        isSubheading: true,
      },
      {
        id: "design-patterns",
        title: "Design Patterns Used",
        isSubheading: false,
      },
      {
        id: "business-value",
        title: "Business Value & Conclusion",
        isSubheading: false,
      },
      {
        id: "future-enhancements",
        title: "Future Enhancements",
        isSubheading: false,
      },
    ],

    // Tech stack used for the project
    techStack: [
      {
        title: "Frontend",
        items: ["React", "Tailwind CSS", "Prism.js", "React Live"],
      },
      {
        title: "Backend",
        items: ["Express.js", "Axios", "Figma API"],
      },
      {
        title: "AI Integration",
        items: ["LLM Service", "Natural Language Processing"],
      },
      {
        title: "Development Tools",
        items: ["Webpack", "Babel", "ESLint & Prettier", "Nodemon"],
      },
    ],

    // Project content sections
    contentSections: [
      {
        id: "project-overview",
        title: "Project Overview",
        content: `
          <p>
            Phoenix Codie is a sophisticated tool that automates the conversion
            of Figma designs into production-ready React code. It serves as a
            bridge between designers and developers, significantly reducing the
            time and effort required to transform design mockups into functional
            components.
          </p>

          <img
            src="https://via.placeholder.com/800x400"
            alt="Phoenix Codie Interface"
          />

          <p>
            Every product team knows the struggle: you've crafted a drop-dead
            gorgeous component in Figma, but then reality hits and you realise
            that turning it into actual code is like assembling IKEA furniture
            without a manual. Hours vanish, your sanity takes a hit, and
            somehow, your beautiful design looks like it lost a fight with CSS.
            And don't even get me started on naming variables—because somehow,
            <code>containerDivFinal_Final2</code> always sneaks in. This gap
            between design and development has been a major speed bump in
            shipping polished products efficiently.
          </p>

          <p>
            Enter Phoenix Codie - the solution to this chaos. It accepts Figma
            URLs or file keys, extracts design structure through the Figma API,
            and generates corresponding React components with matching styles.
            No "why is this misaligned?" breakdowns, no extra drama - just
            clean, production-ready code that actually works.
          </p>

          <p>
            Let me spill some tea on how I built it, the "fun" (<em
              >read: rage-inducing</em
            >) roadblocks I hit, and the facepalms I collected along the way. If
            you're a dev, a designer, or just curious about this cool tech
            mashup, buckle up, this is gonna be a ride!
          </p>
        `,
      },
      {
        id: "the-big-problem",
        title: "The Big Problem",
        content: `
          <p>
            So, here's the tea: converting Figma designs into code is slow and
            frustrating. It's not as fun as debugging a production issue on a
            Friday night. Developers spend hours figuring out:
          </p>
          <ul>
            <li>
              How to translate Figma layouts into CSS without summoning the dark
              forces of <code>!important</code>.
            </li>
            <li>Which props to use and where.</li>
            <li>
              Keeping components reusable and design-system-approved (because
              future you will 100% judge past you).
            </li>
          </ul>

          <p>
            And let's be honest—most design-to-code tools give you meh output.
            You get some messy HTML/CSS that feels outdated, like it's stuck in
            2010. No React vibes, no reusable components, and definitely no love
            for design systems.
          </p>
        `,
      },
      {
        id: "key-features",
        title: "Key Features",
        content: `
          <div class="feature-block">
            <h4>Design-to-Code Conversion</h4>
            <p>
              Phoenix Codie accepts Figma file URLs or file keys, intelligently
              identifies components from Figma designs, detects layout patterns,
              and accurately extracts styling properties.
            </p>
          </div>

          <div class="feature-block">
            <h4>User Interface</h4>
            <p>
              Features a split-panel view with generated React markup and
              styles, real-time preview of components, version history tracking,
              and support for both dark and light modes.
            </p>
          </div>

          <div class="feature-block">
            <h4>Code Enhancement</h4>
            <p>
              Includes an AI-assisted chat interface for refinement, supports
              direct download of generated code, offers framework conversion
              capabilities, and provides tools for integrating API endpoints or
              JSON data.
            </p>
          </div>
        `,
      },
      {
        id: "the-plan",
        title: "The Plan: Smarter, Not Harder",
        content: `
          <p>
            We wanted Phoenix Codie to be a specialist, not just another
            half-baked, "look-ma-I-exported-HTML" tool. Phoenix Codie employs a
            client-server architecture with several specialized subsystems:
          </p>

          <img
            src="https://via.placeholder.com/800x400"
            alt="Phoenix Codie Architecture"
          />

          <p>
            The plan involved building a sophisticated system with these key
            components:
          </p>

          <ol>
            <li>
              <strong>Client Application:</strong> React-based frontend for user
              interaction and code display
            </li>
            <li>
              <strong>API Server:</strong> Express.js backend that communicates
              with the Figma API
            </li>
            <li>
              <strong>Parsing Engine:</strong> System to transform Figma API
              responses into an intermediate representation
            </li>
            <li>
              <strong>Code Generation System:</strong> Converts the intermediate
              representation into React components
            </li>
            <li>
              <strong>LLM Service:</strong> Handles AI-assisted code refinement
              through a chat interface
            </li>
          </ol>
        `,
      },
      {
        id: "alchemist-engine",
        title: "The Alchemist Engine - The Execution",
        content: `
          <p>
            The heart of Phoenix Codie lies in its Alchemist engine — a
            sophisticated system for analyzing and transforming Figma designs
            into React components. Let me give you the lowdown on how this
            powerhouse runs the show.
          </p>
        `,
      },
      {
        id: "layout-detection",
        title: "Layout Pattern Detection System",
        content: `
          <img
            src="https://via.placeholder.com/800x500"
            alt="Layout Pattern Detection System Diagram"
          />

          <p>
            When a developer looks at a design—let's say a grid layout—they'd
            visually identify the elements and think, "Ok, these elements are
            aligned both horizontally and vertically with consistent spacing -
            this is clearly a grid layout." It's similar to how we instinctively
            recognize a spreadsheet pattern.
          </p>

          <p>
            First, I wanted to spot how the elements are arranged. When elements
            are positioned in the design, check their coordinates and grouping.
            For example:
          </p>

          <pre class="code-block">
Element 1: (x: 0, y: 0)
Element 2: (x: 200, y: 0)
Element 3: (x: 400, y: 0)
Element 4: (x: 0, y: 200)
Element 5: (x: 200, y: 200)
Element 6: (x: 400, y: 200)
</pre>

          <p>
            If elements share the same x-coordinate (or close enough) and have
            consistent spacing on the y-axis - it's a vertical stack. Flip it,
            reverse it, do a little dance, and boom—you've now got a horizontal
            stack. Easy, right?
          </p>
        `,
      },
      {
        id: "layout-extractor",
        title: "Layout Extractor",
        content: `
          <p>
            Once the layout pattern is identified, it's time to apply the layout
            properties with respect to itself and the parent-child and sibling
            relationships.
          </p>

          <p>
            The main goals are to get and standardize basic layout properties,
            deal with auto-layout conversion, handle padding and spacing
            precisely, and make the resulting layout structure as good as
            possible.
          </p>

          <p>When Figma says "this is an auto-layout container" it means it's a
          flexbox. I made a mapping system that goes like this:</p>
          <ul>
            <li>HORIZONTAL layout → flex-direction: row</li>
            <li>VERTICAL layout → flex-direction: column</li>
            <li>primaryAxisAlignItems → justify-content</li>
            <li>counterAxisAlignItems → align-items</li>
          </ul>
        `,
      },
      {
        id: "position-detection",
        title: "Position Detection System",
        content: `
          <p>
            The Position Detection System is the brains behind perfect element
            placement. Here's how it works:
          </p>
          <ul>
            <li>
              Scans positions → Checks where elements sit in relation to each
              other
            </li>
            <li>Spots alignment patterns → Detects if things are lined up</li>
            <li>Assigns CSS positioning → No more position: absolute abuse</li>
            <li>Handles edge cases → Overlaps and nested elements</li>
          </ul>

          <p>
            It's basically the GPS for the UI elements—mapping out their
            placement like a 3D coordinate system but for web layouts.
          </p>
        `,
      },
      {
        id: "results-impact",
        title: "The Glow-Up: Results & Impact",
        content: `
          <p>
            With Phoenix Codie, what used to take hours now takes minutes. Some
            quick stats:
          </p>
          <ul>
            <li>
              <span class="highlight">70% faster</span> component
              implementation.
            </li>
            <li>
              Clean, high-quality React code that actually follows design-system
              rules.
            </li>
            <li>Less need for reworks.</li>
          </ul>

          <p>
            Developers who've tried it are like, "Where has this been all my
            life?"
          </p>

          <p>
            <strong>Aspero Desktop:</strong>
          </p>
          <ul>
            <li>Regular approach: 8 - 9 hours</li>
            <li>Phoenix Codie: 2 - 3 hours</li>
          </ul>

          <div class="image-container">
            <img
              src="https://via.placeholder.com/350x500"
              alt="Original design"
            />
            <span class="arrow-icon">→</span>
            <img
              src="https://via.placeholder.com/350x500"
              alt="Generated output"
            />
          </div>
        `,
      },
      {
        id: "component-identification",
        title: "Smart Component Identification",
        content: `
          <p>
            One of the most impressive features is how Phoenix Codie
            intelligently maps Figma components to appropriate React components:
          </p>

          <pre class="code-block">
function identifyComponentType(node) {
  // Special case for icons
  if (node.name?.toLowerCase().includes('icon')) {
    return 'Icon';
  }

  // Special case for tables
  if (node.name?.toLowerCase().includes('table v3')) {
    return 'Table';
  }

  // Handle instance components
  if (node.type === 'INSTANCE') {
    const trimmedName = node.name.split(/[^a-zA-Z0-9 ]/)[0];
    const matchedComponent = Object.keys(componentTypeMap).find((key) => 
      trimmedName?.toLowerCase().includes(key.toLowerCase())
    );
    
    if (matchedComponent) {
      return componentTypeMap[matchedComponent];
    }
  }

  // Handle text nodes
  if (node.type === 'TEXT') {
    return 'Typography';
  }

  // Default case
  return 'View';
}</pre>
        `,
      },
      {
        id: "design-patterns",
        title: "Design Patterns Used",
        content: `
          <p>
            Building Phoenix Codie required implementing several sophisticated
            design patterns:
          </p>

          <div class="feature-block">
            <h4>Extractor Factory Pattern</h4>
            <p>
              Allows for specialized handling of different component types while
              maintaining a consistent interface:
            </p>
          </div>

          <pre class="code-block">
            class ComponentPropExtractorFactory {
              static extractorMap = {
                Button: ButtonPropExtractor,
                Tabs: TabsPropExtractor,
                // ... other extractors
              };

              static create(node, componentType, componentDoc, parentLayout, propMapping) {
                const ExtractorClass = this.extractorMap[componentType] || GenericComponentPropExtractor;
                return new ExtractorClass(node, componentType, componentDoc, parentLayout, propMapping);
              }
            }</pre>

                      <div class="feature-block">
              <h4>Composite Pattern</h4>
              <p>Represents the hierarchical structure of UI components:</p>
            </div>

            <pre class="code-block">
            createContainerComponent(node, layout, styles, children, depth, figmaImages) {
              let childComponents = children.map((child) => 
                this.traverse(child, layout, depth + 1, figmaImages)
              ).filter(Boolean);
              
              return {
                type: node.type === "FRAME" ? "View" : "Group",
                key: node.id,
                name: node.name,
                layout,
                style: styles,
                children: childComponents,
                spacing: this.extractSpacingInfo(node),
              };
            }
          </pre>
        `,
      },
      {
        id: "lessons",
        title: "Lessons From the Grind",
        content: `
          <p>
            Building Phoenix Codie was like trying to assemble a jigsaw puzzle
            where half the pieces are invisible and the other half explode on
            contact. Converting Figma's positioning madness into sleek,
            maintainable Flexbox and Grid layouts was the biggest challenge. At
            this point, I don't even code—I just perform dark rituals and hope
            the CSS gods grant me mercy.
          </p>
        `,
      },
      {
        id: "layouts-tricky",
        title: "Layouts Are Tricky",
        content: `
          <p>
            Figma uses absolute positioning but React leans on Flexbox/Grid.
            They don't exactly shake hands. Translation is <em>Hard</em>. Guess
            who had to play translator? Yeah.
          </p>
      
          <p>
            Figma's auto-layout system, while powerful, doesn't map perfectly to
            CSS Flexbox and Grid.
          </p>
          <ol>
            <li>
              Spacing Inconsistencies: Figma's spacing model needed careful
              translation to CSS
            </li>
            <li>
              Nested Auto-layouts: Complex nested layouts required special
              handling
            </li>
            <li>
              Responsive Considerations: Making the generated code responsive
              while maintaining design fidelity
            </li>
          </ol>
        `,
      },
      {
        id: "nested-components",
        title: "Nested Components = Chaos",
        content: `
          <p>
            One of the biggest surprises was the complexity of handling nested
            components. What seemed straightforward in theory became complex
            when dealing with real-world designs. A button, for instance. It has
            hover states, focus styles, active states, disabled versions, and a
            hidden variant for some reason. Codie handles this gracefully by
            breaking down each layer into props.
          </p>
        `,
      },
      {
        id: "error-handling",
        title: "Error Handling Saves Lives",
        content: `
          <p>
            Early versions of Codie simply failed on invalid inputs. One wrong
            move, and the whole thing went down. But we leveled up.
          </p>
          <ol>
            <li>
              Graceful Degradation: When certain properties couldn't be
              extracted, the system falls back to sensible defaults.
            </li>
            <li>
              Detailed Error Reporting: Instead of vague "something broke"
              messages, you actually get useful info.
            </li>
            <li>
              Recovery Mechanisms: The ability to continue processing even when
              parts of the design are invalid.
            </li>
          </ol>
        `,
      },
      {
        id: "documentation",
        title: "Documentation Importance",
        content: `
          <p>
            You know what's fun? Building cool stuff. You know what's not fun?
            Trying to remember how that cool stuff works six months later.
          </p>
      
          <p>That's why we created detailed docs for:</p>
          <ol>
            <li>Component mappings</li>
            <li>Property translations</li>
            <li>Style conversions</li>
            <li>Common error scenarios</li>
          </ol>
      
          <p>
            This documentation proved invaluable. Because Telepathy Isn't a
            Feature (Yet).
          </p>
      
          <p>
            The most valuable lesson was the importance of real-world testing
            with actual design files, as they often contained edge cases that
            weren't covered by our initial test suite. There were a lot of
            "well, that's new" moments.
          </p>
        `,
      },
      {
        id: "business-value",
        title: "Business Value & Conclusion",
        content: `
          <p>
            Phoenix Codie provides significant value in the
            design-to-development workflow:
          </p>
      
          <ol>
            <li>
              <strong>Time Savings:</strong> Reduces the time required to
              translate designs into code by 60-80%
            </li>
            <li>
              <strong>Consistency:</strong> Ensures consistent implementation of
              design elements across applications
            </li>
            <li>
              <strong>Quality:</strong> Generates optimized, clean code that
              follows best practices
            </li>
            <li>
              <strong>Collaboration:</strong> Improves designer-developer
              collaboration by providing a common reference point
            </li>
            <li>
              <strong>Iteration Speed:</strong> Enables rapid design iteration
              by quickly reflecting changes in code
            </li>
          </ol>
      
          <p>
            Phoenix Codie represents a sophisticated solution to the persistent
            challenge of translating designs into code. We took the design-dev
            handshake, slapped some AI into it, and made the whole process
            ridiculously smooth. No more nightmares, no more therapy sessions.
            Just clean, fast, and design-accurate code that makes devs and
            designers finally get along (well, mostly).
          </p>
      
          <p>
            The system's architecture demonstrates a thoughtful approach to the
            problem, with specialized modules handling different aspects of the
            conversion process and a user-friendly interface that makes the tool
            accessible to both developers and designers. The integration of AI
            assistance further enhances its capabilities, allowing for natural
            language refinement of the generated code.
          </p>
        `,
      },
      {
        id: "future-enhancements",
        title: "Future Enhancements",
        content: `
          <p>Potential areas for expansion of Phoenix Codie include:</p>
      
          <ul>
            <li>
              Animation Support: Detecting and implementing animations from
              Figma designs
            </li>
            <li>
              Design System Integration: Direct mapping to established component
              libraries
            </li>
            <li>
              Code Export Formats: Support for additional frameworks beyond
              React
            </li>
            <li>
              Custom Component Creation: Adding custom component templates
            </li>
            <li>
              Design Validation: Checking designs for implementation feasibility
            </li>
            <li>
              Accessibility Review: Suggestions for improving accessibility in
              generated code
            </li>
          </ul>
      
          <p>
            As design systems and component-based development continue to grow
            in importance, tools like Phoenix Codie will play an increasingly
            vital role in streamlining the development process, enabling teams
            to focus on innovation rather than implementation details.
          </p>
      
          <p>Got feature requests? Drop 'em hot—we're always listening.</p>
      
          <p>
            Codie streamlines workflows, keeps code clean, and ensures that what
            you design is what you ship. The only question is: Are you in?
          </p>
        `,
      },
    ],
  },
  // Netflix Clone project
  // Netflix Clone project template
  "netflix-clone": {
    id: "netflix-clone",
    title: "Netflix Clone: Streaming Platform Recreation",
    date: "January 10, 2023",

    // Table of Contents sections
    sections: [
      {
        id: "project-overview",
        title: "Project Overview",
        isSubheading: false,
      },
      { id: "features", title: "Key Features", isSubheading: false },
      {
        id: "technical-details",
        title: "Technical Implementation",
        isSubheading: false,
      },
      {
        id: "challenges",
        title: "Challenges & Solutions",
        isSubheading: false,
      },
      { id: "lessons", title: "Lessons Learned", isSubheading: false },
      { id: "future-work", title: "Future Improvements", isSubheading: false },
    ],

    // Tech stack used for the project
    techStack: [
      {
        title: "Frontend",
        items: ["React", "Styled Components", "Context API", "React Router"],
      },
      {
        title: "Backend & Authentication",
        items: [
          "Firebase Authentication",
          "Firestore Database",
          "Firebase Storage",
        ],
      },
      {
        title: "API Integration",
        items: ["The Movie Database API", "YouTube API"],
      },
      {
        title: "Development Tools",
        items: ["Create React App", "ESLint", "Prettier", "Git"],
      },
    ],

    // Project content sections would go here
    contentSections: [
      // Content sections would follow the same pattern as Phoenix Codie
    ],
  },
};

export { projects };
