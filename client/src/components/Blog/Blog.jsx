import React from 'react';
import './blog.scss';
import SpecialGrid from './assets/special-grid.jpg';
import TestGraph from './assets/average_test_scores_by_age.png';
import OutputComparison from './assets/Output Comparison Nova Mode.png';
import CoverPhoto from './assets/dalleCoverPhoto.png';
import { DiscussionEmbed } from 'disqus-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
function Blog() {
    function copyToClipboard() {
        navigator.clipboard
            .writeText(
                'https://harrisgreenstein.com/blog/how_will_coders_co_program_with_ai'
            )
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch((err) => {
                console.error('Error in copying text: ', err);
            });
    }

    return (
        <section id="blog" className="blog-container">
            <Helmet>
                <title>Harris Greenstein's Blog</title>
                <meta
                    property="og:title"
                    content="How Will Coders Co-Program With AI?"
                />
                <meta
                    property="og:description"
                    content="This article explores the future of programming alongside AI,
                emphasizing a collaborative approach where coders and artificial
                intelligence systems enhance each other's capabilities. It
                introduces the innovative “//py” mode, designed for seamless
                integration of natural language and coding, and discusses the
                transformative impact of Nova Mode on ChatGPT's functionality.
                The piece highlights how these advancements will enable
                programmers to express complex coding logic in simpler terms,
                revolutionizing the way we interact with coding languages.
"
                />
                <meta property="og:image" content={CoverPhoto} />
                <meta
                    property="og:url"
                    content="https://harrisgreenstein.com/blog/how_will_coders_co_program_with_ai"
                />
                <meta
                    name="description"
                    content="This article explores the future of programming alongside AI,
                emphasizing a collaborative approach where coders and artificial
                intelligence systems enhance each other's capabilities. It
                introduces the innovative “//py” mode, designed for seamless
                integration of natural language and coding, and discusses the
                transformative impact of Nova Mode on ChatGPT's functionality.
                The piece highlights how these advancements will enable
                programmers to express complex coding logic in simpler terms,
                revolutionizing the way we interact with coding languages.
"
                />
            </Helmet>
            <h1
                className="code-line"
                data-line-start="0"
                data-line-end="1"
                style={{ textAlign: 'center' }}
            >
                <a id="How_will_coders_coprogram_with_AI_0"></a>How Will Coders
                Co-Program With AI?
            </h1>
            <h5
                className="has-line-data"
                data-line-start="2"
                data-line-end="3"
                style={{
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                Nova Mode + Code Interpreter: The Future of Natural Language
                Coding
            </h5>
            <h6
                style={{
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                By: Harris Greenstein
            </h6>
            <br />
            <em>
                This article explores the future of programming alongside AI,
                emphasizing a collaborative approach where coders and artificial
                intelligence systems enhance each other's capabilities. It
                introduces the innovative “//py” mode, designed for seamless
                integration of natural language and coding, and discusses the
                transformative impact of Nova Mode on ChatGPT's functionality.
                The piece highlights how these advancements will enable
                programmers to express complex coding logic in simpler terms,
                revolutionizing the way we interact with coding languages.
            </em>
            <br />
            <br />
            <figure style={{ display: 'flex', flexDirection: 'column' }}>
                <img
                    src={CoverPhoto}
                    alt="Photo of man coding with Intelligent AI Agent"
                />
                <figcaption
                    style={{
                        textAlign: 'center',
                        color: 'var(--bs-secondary-color)',
                    }}
                >
                    Photo generated by Dalle 3 given full text of the article
                    asked to describe the relationship between AI and coders in
                    the future
                </figcaption>
            </figure>
            <br />
            <h2 className="code-line" data-line-start="4" data-line-end="5">
                <a id="The_future_of_coding_with_AI_A_Collaborative_Landscape_4"></a>
                The future of coding with AI: A Collaborative Landscape
            </h2>
            <h3 className="code-line" data-line-start="6" data-line-end="7">
                <a id="Embracing_Coexistence_Coders_and_AI_in_Harmony_6"></a>
                Embracing Coexistence: Coders and AI in Harmony
            </h3>
            <p className="has-line-data" data-line-start="8" data-line-end="9">
                While some think that AI will soon program everything,
                eliminating the need for programmers all together, a more common
                consensus is that we will co-exist and program alongside the AI
                tools of the future. But how will programmers communicate to the
                AI about what code to write?
            </p>
            <p
                className="has-line-data"
                data-line-start="10"
                data-line-end="11"
            >
                I propose a new way of combining natural language and code-like
                words and syntax called “//py” mode to work in conjunction with{' '}
                <a
                    href="https://www.novaspivack.com/technology/nova-mode-the-ultimate-chatgpt-custom-instruction"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nova Mode
                </a>
                . It utilizes a software engineer’s existing skills translating
                problems into smaller tasks accomplishable by code with the AI's
                extensive knowledge base of how to write syntactically correct
                code and ability to memorize the nuances of different languages
                to accomplish the same task
            </p>
            <h3 className="code-line" data-line-start="12" data-line-end="13">
                <a id="The_Dialogue_of_Development_Choosing_Our_Language_12"></a>
                The Dialogue of Development: Choosing Our Language
            </h3>
            <p
                className="has-line-data"
                data-line-start="14"
                data-line-end="15"
            >
                Currently we have two main options to communicate our ideas as
                coders to the AI: direct coding and natural language. Each has
                its own merits. Coders have successfully used buggy code as a
                dialogue tool, providing AI with the flawed script and its
                errors. They have witnessed the AI’s impressive problem-solving
                capabilities.
            </p>
            <p
                className="has-line-data"
                data-line-start="16"
                data-line-end="17"
            >
                On the other hand, natural language serves as our primary means
                for presenting new challenges, especially when no code exists
                yet. It’s a powerful tool, but as the complexity of a problem
                increases, so does the verbosity of our explanations.
            </p>
            <p
                className="has-line-data"
                data-line-start="18"
                data-line-end="19"
            >
                While even communicating with large language models for coding
                assistance is an option we didn’t have just a few years ago,
                this often requires walking back and explaining your problem
                more like a story instead of a programming problem. One of a
                developer’s main skills is problem solving in a coding mindset.
                They may already have an idea of the number of iterations of the
                loop, the
                <code>if</code> conditions to check in that loop, and the
                variables to keep track of, so it would be better to simply
                communicate this information, plus whatever you didn’t know,
                supplemented by natural language.
            </p>
            <p
                className="has-line-data"
                data-line-start="20"
                data-line-end="21"
            >
                This concept finds its parallel in the world of{' '}
                <a
                    href="https://en.wikipedia.org/wiki/Pseudocode"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    pseudo code
                </a>
                . Here, we abandon strict syntax in favor of a more
                English-centric approach to writing code. Instead of the rigid
                syntax of a for loop in Java for example,
                <code>for(int i = 0; i &lt; 10; i++)</code>, we embrace the
                intuitive <code>for i from 0 to 9</code>. I envision a
                programming environment where this blend of language-agnostic
                pseudo code and natural language is not only understood, but
                transformed by AI into functional code. This could revolutionize
                our workflow, marrying the precision of programming with the
                fluidity of human thought.
            </p>
            <h2 className="code-line" data-line-start="22" data-line-end="23">
                <a id="Understanding_Nova_Mode_A_Breakthrough_in_AI_Interaction_22"></a>
                Understanding Nova Mode: A Breakthrough in AI Interaction
            </h2>
            <p
                className="has-line-data"
                data-line-start="24"
                data-line-end="25"
            >
                I was recently introduced to{' '}
                <a
                    href="https://www.novaspivack.com/technology/nova-mode-the-ultimate-chatgpt-custom-instruction"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nova Mode: The Ultimate ChatGPT Custom Instruction
                </a>
                . This custom instruction set takes ChatGPT to another level,
                boosting its functionality and usability. Nova Mode introduces
                “//” prefixed commands, a simple yet powerful way to communicate
                user intentions to the AI. This can range from summarizing
                discussions to addressing specific past messages, now
                conveniently numbered for easy reference. Nova Mode simplifies
                AI communication, bridging the gap for casual users who may find
                it challenging to get complete, format-specific responses
                without advanced prompt engineering skills.
            </p>
            <h3 className="code-line" data-line-start="26" data-line-end="27">
                <a id="Nova_Mode_in_Action_26"></a>Nova Mode in Action
            </h3>
            <p
                className="has-line-data"
                data-line-start="28"
                data-line-end="29"
            >
                My first encounter with Nova Mode’s prowess was through the
                “//distill” command. It amazed me by succinctly summarizing a
                series of chat responses, providing a clear and concise overview
                of an entire conversation. This efficiency was further amplified
                by commands like “//digest” for summarizing subsequent inputs
                and “//N” for referring back to specific messages. For example,
                you could reply back to message <code>N</code> where{' '}
                <code>N = 3</code>, telling the AI to focus this response around
                what was said in the third message. It felt like unlocking a new
                world of communicating what I want to the AI with less worry
                about a well structured prompt engineering input for every
                interaction.
            </p>
            <h3 className="code-line" data-line-start="30" data-line-end="31">
                <a id="Nova_Mode_Custom_Functions_30"></a>Nova Mode Custom
                Functions
            </h3>
            <p
                className="has-line-data"
                data-line-start="32"
                data-line-end="33"
            >
                What truly captivated me was Nova Mode’s custom function
                feature. It allows users to create their own tailored prompts,
                enhancing the AI's response to specific needs. For instance, I
                crafted a “//professional &#60;field of expertise&#62;
                &#60;request for expert&#62; ” function. This command directed
                the AI to assume the role of any type of professional specified
                in the first input field and to assist with a particular request
                specified in the second parameter field to the function.
            </p>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="35"
                    data-line-end="37"
                >
                    //f &quot;professional&quot; x y “CPT is a professional in
                    x. CPT will assist the user in request y using that
                    expertise while walking through the answer step by step.
                    Despite CPT's expertise in x, CPT should not assume user is
                    an expert in x and begin explanations from base level
                    understanding and adapt ongoing responses based on expertise
                    level of knowledge evaluated from their questions and
                    responses.”
                </code>
            </pre>
            <p
                className="has-line-data"
                data-line-start="38"
                data-line-end="39"
            >
                Applying this function yielded impressive results. For example,
                when I asked about implementing a feature in React.js, the AI,
                under the guise of a professional, provided a comprehensive,
                step-by-step guide. I even enhanced the responses with a “//v”
                for verbosity, ensuring a thorough explanation from basics to
                advanced concepts.
            </p>
            <p
                className="has-line-data"
                data-line-start="40"
                data-line-end="41"
            >
                For example, I told it it was a professional geologist and it
                helped me well with explaining the definition of Obsidian as
                well as its cultural significance. This came from a  prompt as
                simple as:{' '}
                <code>
                    //professional geologist Explain what obsidian is, how it's
                    made and the uses
                </code>
            </p>
            <p
                className="has-line-data"
                data-line-start="42"
                data-line-end="43"
            >
                Asking the same question without the function, it gave a much
                less appealing output that left out multiple examples, and was
                not sorted by the part of the question it was answering.
                Additionally, the response without the function took the prompt
                much more literally only discussing the surface level that
                obsidian is used for crystal healing and not the higher level
                idea that obsidian has cultural significance.
            </p>
            <p
                className="has-line-data"
                data-line-start="44"
                data-line-end="45"
            >
                <img src={OutputComparison} alt="Output Comparison" />
            </p>
            <h2 className="code-line" data-line-start="46" data-line-end="47">
                <a id="Code_Interpreter_Mode_py_46"></a>Code Interpreter Mode
                “//py”
            </h2>
            <p
                className="has-line-data"
                data-line-start="48"
                data-line-end="49"
            >
                Building on the robust foundation of Nova Mode, I created “//py”
                mode as a natural progression. Nova Mode already incorporates
                conditional logic with &quot;
                <strong>//if [condition] [then] [else]</strong>&quot; and
                looping capabilities akin to a <code>for</code>
                loop through{' '}
                <code>//! (\[command to loop], \[times to loop])</code>. This
                foundation of functionality nearly equips us with the full range
                of capabilities necessary for{' '}
                <a
                    href="https://en.wikipedia.org/wiki/Turing_completeness"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Turing-complete communication
                </a>
                , the metric that declares a machine has the ability to do
                anything the most powerful computer could do given enough time
                and logic.
            </p>
            <p
                className="has-line-data"
                data-line-start="50"
                data-line-end="51"
            >
                Yet, a crucial piece was missing in this puzzle. While existing
                functions in Nova Mode enable the AI to recontextualize
                requests, they don’t translate directly into executable code.
                Our aim isn’t merely to have the AI simulate code reasoning in
                conversational language; we aspire for it to internalize our
                logic and convert it into syntactically precise Python code,
                executing it to yield actual results.
            </p>
            <p
                className="has-line-data"
                data-line-start="52"
                data-line-end="53"
            >
                This is where “//py” mode comes into play. It’s more than just a
                set of commands; it’s a paradigm shift. By activating “//py”
                mode, you can use the AI to interpret inputs - be they
                functions, conditionals, or variables - as Python code. It’s a
                significant leap from AI as an assistant to AI as a coder, where
                the definition of any code component can range from a concise
                directive like <code>if x</code> to an exhaustive essay
                detailing every conceivable condition.
            </p>
            <h3 className="code-line" data-line-start="54" data-line-end="55">
                <a id="Defining_py_Mode_Crafting_a_Natural_Language_Code_Interpreter_54"></a>
                Defining “//py” Mode: Crafting a Natural Language Code
                Interpreter
            </h3>
            <p
                className="has-line-data"
                data-line-start="56"
                data-line-end="57"
            >
                In developing “//py” mode, my aim was to enable programming
                through natural language, interpreted into Python code. Having
                used Python extensively in data science and machine learning
                projects, I appreciate its powerful libraries and capabilities.
                Conversely, for algorithmic challenges and data structures, I
                typically turn to Java, valuing its type safety and the nuanced
                optimizations I’ve mastered not just for theoretical{' '}
                <a
                    href="https://en.wikipedia.org/wiki/Time_complexity"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    algorithmic time complexity
                </a>
                , but for optimal real-world performance. The process unfolded
                through a series of three straightforward, plain English inputs,
                each adding a layer of functionality to this new mode.
            </p>
            <ol>
                <li
                    className="has-line-data"
                    data-line-start="58"
                    data-line-end="60"
                >
                    <p
                        className="has-line-data"
                        data-line-start="58"
                        data-line-end="59"
                    >
                        <strong>Initializing Code Interpretation</strong>: The
                        initial step involved setting up the “//py” tag. This
                        tag was designed to signal that the following inputs
                        should be interpreted as Python code. This was the
                        crucial first step in creating a bridge between natural
                        language instructions and executable code.
                    </p>
                </li>
                <li
                    className="has-line-data"
                    data-line-start="60"
                    data-line-end="62"
                >
                    <p
                        className="has-line-data"
                        data-line-start="60"
                        data-line-end="61"
                    >
                        <strong>Optimizing Function Creation</strong>: The next
                        phase was about refining how functions would be created
                        and interpreted in “//py” mode. Instead of generating
                        new Python functions for simple tasks, the idea was to
                        directly translate actions like defining variables into
                        equivalent Python code within the current scope. This
                        approach aimed for minimal code generation, ensuring
                        efficiency and simplicity in the translation process.
                    </p>
                </li>
                <li
                    className="has-line-data"
                    data-line-start="62"
                    data-line-end="63"
                >
                    <p
                        className="has-line-data"
                        data-line-start="62"
                        data-line-end="63"
                    >
                        <strong>Incorporating Basic Operators</strong>: Finally,
                        I integrated basic mathematical and comparison
                        operators, such as multiplication (<code>//* x y</code>)
                        and greater-than-or-equal-to comparisons (
                        <code>//&gt;= x y</code>) in a{' '}
                        <a
                            href="https://en.wikipedia.org/wiki/Lambda_calculus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            lambda calculus
                        </a>{' '}
                        style notation. This allowed for the use of concise,
                        pseudo code-like expressions, aligning with Nova Mode’s
                        philosophy of reducing token usage and enhancing
                        brevity.
                    </p>
                </li>
            </ol>
            <p
                className="has-line-data"
                data-line-start="65"
                data-line-end="66"
                id="footerLink1"
            >
                Each of these steps contributed to the establishment of “//py”
                mode as a functional, intuitive code interpreter, transforming
                natural language inputs into syntactically correct Python code.
                This innovative approach promises to redefine how we interact
                with AI in the realm of programming, making it accessible and
                efficient for a wide range of users.
            </p>
            <p
                className="has-line-data"
                data-line-start="67"
                data-line-end="68"
            >
                For a detailed look at the specific inputs used to define “//py”
                mode,{' '}
                <a href="/blog/how_will_coders_co_program_with_ai#1_191">
                    click here
                </a>
                .
            </p>
            <h3 className="code-line" data-line-start="69" data-line-end="70">
                <a id="Testing_py_mode_69"></a>Testing “//py” mode
            </h3>
            <p
                className="has-line-data"
                data-line-start="71"
                data-line-end="72"
            >
                After defining the mode, it seemed the AI understood what the
                mode was going to do and how to do it, so it was time to put it
                to the test.
            </p>
            <h2 className="code-line" data-line-start="74" data-line-end="75">
                <a id="LeetCode_Challenges_Demonstrating_py_Modes_Versatility_74"></a>
                LeetCode Challenges: Demonstrating “//py” Mode’s Versatility
            </h2>
            <h3 className="code-line" data-line-start="76" data-line-end="77">
                <a id="Tackling_Diverse_Coding_Problems_76"></a>Tackling Diverse
                Coding Problems
            </h3>
            <p
                className="has-line-data"
                data-line-start="78"
                data-line-end="79"
                id="footerLink2"
            >
                In testing “//py” mode, I chose two distinct challenges from{' '}
                <a
                    href="https://leetcode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LeetCode
                </a>{' '}
                - the{' '}
                <a
                    href="https://leetcode.com/problems/two-sum/description/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    “Two Sum”
                </a>{' '}
                problem and the{' '}
                <a
                    href="https://leetcode.com/problems/unique-paths/description"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    “Unique Paths”
                </a>{' '}
                problem. These problems were selected to evaluate “//py” mode’s
                ability to interpret and solve varying levels of algorithmic
                complexity using natural language inputs. For those interested
                in learning more, full solutions to{' '}
                <a
                    href="https://github.com/hgreenstein/LeetCode-Explanations-and-Solutions/blob/main/1.Two-Sum/Solution.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    “Two Sum”
                </a>{' '}
                and{' '}
                <a
                    href="https://github.com/hgreenstein/LeetCode-Explanations-and-Solutions/blob/main/62.Unique-Paths/Solution.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    “Unique Paths”
                </a>{' '}
                are available on my{' '}
                <a
                    href="https://github.com/hgreenstein/LeetCode-Explanations-and-Solutions/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                .
            </p>
            <ol>
                <li
                    className="has-line-data"
                    data-line-start="80"
                    data-line-end="82"
                >
                    <p
                        className="has-line-data"
                        data-line-start="80"
                        data-line-end="81"
                        id="footerLink3"
                    >
                        <strong>Two Sum Challenge</strong>: A classic problem
                        where the task is to find two numbers in an array that
                        add up to a target sum. My approach involved expressing
                        the logic in natural language, without directly naming
                        the problem, to test the AI's ability to translate
                        intuitive language into a Python function. Despite “Two
                        Sum” being a widely known problem, the AI adhered
                        strictly to my instructions, showcasing its capacity to
                        interpret and execute my unique “//py” mode syntax.{' '}
                        <a href="/blog/how_will_coders_co_program_with_ai#2_208">
                            View the “//py” mode input for “Two Sum”
                        </a>
                        . I only implemented the brute force approach as this
                        was my first test and I wanted to just try the basics. I
                        leave the optimized approach as a challenge to the
                        reader at home.
                    </p>
                </li>{' '}
                <li
                    className="has-line-data"
                    data-line-start="82"
                    data-line-end="83"
                >
                    <p
                        className="has-line-data"
                        data-line-start="82"
                        data-line-end="83"
                    >
                        <strong>Unique Paths Challenge</strong>: This problem,
                        involving the calculation of unique paths in a grid,
                        tested “//py” mode’s capability to handle a more
                        complex, Java-influenced logic. My description focused
                        on graph traversal and square counting, deliberately
                        avoiding direct problem references and changing unique
                        names. This was done to deliberately avoid triggering
                        ChatGPT’s potential knowledge basis and training on
                        LeetCode and similar problems. The AI's successful
                        interpretation and translation of these instructions
                        into Python code highlighted “//py” mode’s
                        language-agnostic nature and its ability to adapt to
                        different programming styles.{' '}
                        <a href="/blog/how_will_coders_co_program_with_ai#3_248">
                            View the “//py” mode input for “Unique Paths”
                        </a>
                        .
                    </p>
                </li>
            </ol>
            <h3 className="code-line" data-line-start="83" data-line-end="84">
                <a id="Insights_from_the_Testing_Process_83"></a>Insights from
                the Testing Process
            </h3>
            <p
                className="has-line-data"
                data-line-start="85"
                data-line-end="86"
            >
                This exploration into “//py” mode’s functionality with coding
                challenges revealed its potential as a versatile tool. While
                recognizing the AI's inherent knowledge of common problems, the
                results showed its ability to adhere to unique, user-defined
                instructions. This balance suggests “//py” mode’s suitability
                for both typical coding exercises and more nuanced, creative
                problem-solving.
            </p>
            <h3 className="code-line" data-line-start="87" data-line-end="88">
                <a id="The_Real_Challenge_Daily_LeetCode_Problem_with_py_Mode_87"></a>
                The Real Challenge: Daily LeetCode Problem with “//py” Mode
            </h3>
            <h4 className="code-line" data-line-start="89" data-line-end="90">
                <a id="A_Fresh_Approach_to_a_New_Problem_89"></a>A Fresh
                Approach to a New Problem
            </h4>
            <p
                className="has-line-data"
                data-line-start="91"
                data-line-end="92"
            >
                After testing “//py” mode on familiar problems, I turned to a
                new challenge: the daily LeetCode problem for 12/13/2023 -{' '}
                <a
                    href="https://leetcode.com/problems/special-positions-in-a-binary-matrix"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    “Special Positions in a Binary Matrix”
                </a>
                .
            </p>
            <p
                className="has-line-data"
                data-line-start="93"
                data-line-end="94"
            >
                This was a significant shift; unlike the previous tasks I had
                solved in Java, this problem was uncharted territory for me. My
                goal was to see how effectively “//py” mode could translate my
                thought process into Python code for a problem for which I had
                no preconceived solution.
            </p>
            <h4 className="code-line" data-line-start="95" data-line-end="96">
                <a id="Delving_into_Special_Positions_in_a_Binary_Matrix_95"></a>
                Delving into “Special Positions in a Binary Matrix”
            </h4>
            <p
                className="has-line-data"
                data-line-start="97"
                data-line-end="98"
            >
                “Special Positions in a Binary Matrix,” presented a unique
                grid-based puzzle. The core task wasn’t just to count the number
                of '1’s in the grid, but to identify those '1’s that were unique
                in a specific context - each ‘1’ had to be the only one in its
                entire row and column. For those unfamiliar with Matrix analysis
                - think about Sudoku. Essentially, the challenge was to pinpoint
                '1’s that were solitary in both their horizontal and vertical
                axes. For example, the grid below shows the maximum special
                positions in a 3x3 grid, 3 with all 1s on the diagonal.
            </p>
            <figure style={{ display: 'flex', flexDirection: 'column' }}>
                <img
                    src={SpecialGrid}
                    alt="3x3 grid of 0s and 1s, this grid contains 3 ones on the top left to bottom right diagonal and the remaining squares are 0"
                    style={{ maxWidth: '50dvw', alignSelf: 'center' }}
                />
                <figcaption
                    style={{
                        textAlign: 'center',
                        color: 'var(--bs-body-color)',
                    }}
                >
                    Credit:{' '}
                    <a
                        href="https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        Leetcode{' '}
                    </a>
                </figcaption>
            </figure>
            <h4 className="code-line" data-line-start="101" data-line-end="102">
                <a id="Success_with_Intuitive_Pseudo_Code_101"></a>Success with
                Intuitive Pseudo Code
            </h4>
            <p
                className="has-line-data"
                data-line-start="103"
                data-line-end="104"
                id="footerLink4"
            >
                My process began with forming the pseudo code in my mind. This
                intuitive understanding of the problem seamlessly translated
                into “//py” mode commands. Remarkably, the code not only ran
                correctly on the first try but also ranked in the top quartile
                of solutions. This efficiency highlights “//py” mode’s ability
                to bridge the gap between a coder’s conceptual thinking and
                practical code execution. For those interested in a full written
                solution to this problem, it can again be viewed on my{' '}
                <a
                    href="https://github.com/hgreenstein/LeetCode-Explanations-and-Solutions/blob/main/1582.Special-Positions-in-a-Binary-Matrix/Solution.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub here.
                </a>
            </p>
            <p
                className="has-line-data"
                data-line-start="105"
                data-line-end="106"
            >
                The optimization’s success was largely due to the logical
                framework of the input,{' '}
                <a href="/blog/how_will_coders_co_program_with_ai#4_292">
                    available here
                </a>
                , which is a testament to one of “//py” mode’s key strengths. It
                empowers you, the programmer, to apply years of coding expertise
                in crafting efficient, robust solutions with fewer
                vulnerabilities – something that AI, when limited to just a
                problem description, might not achieve as effectively,
                especially the first time.
            </p>
            <h2 className="code-line" data-line-start="107" data-line-end="108">
                <a id="Graphing_with_Natural_Language_Data_A_Creative_Exploration_with_py_Mode_107"></a>
                Graphing with Natural Language Data: A Creative Exploration with
                “//py” Mode
            </h2>
            <h3 className="code-line" data-line-start="109" data-line-end="110">
                <a id="Venturing_Beyond_Algorithmic_Code_109"></a>Venturing
                Beyond Algorithmic Code
            </h3>
            <p
                className="has-line-data"
                data-line-start="111"
                data-line-end="112"
            >
                After the successes with LeetCode problems, I wanted to delve
                into a more abstract challenge, one that leveraged the AI's
                reasoning capabilities alongside “//py” mode’s potential. The
                goal was to transform natural language data into a functional
                graph using Python, testing the AI's ability to interpret and
                execute more complex, conceptual instructions.
            </p>
            <h3 className="code-line" data-line-start="113" data-line-end="114">
                <a id="The_Setup_Natural_Language_Data_to_Graph_113"></a>The
                Setup: Natural Language Data to Graph
            </h3>
            <p
                className="has-line-data"
                data-line-start="115"
                data-line-end="116"
            >
                I generated a dataset in natural language, describing students
                and their test scores in a separate chat. This approach was
                chosen to ensure the AI would not be influenced by any
                pre-existing context. The data was structured as follows:
            </p>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="118"
                    data-line-end="120"
                >
                    Student2 is age: 20 with test scores: 71, 95, 68, 100, 61
                </code>
            </pre>
            <p
                className="has-line-data"
                data-line-start="121"
                data-line-end="122"
            >
                I then prompted it with a few functions. It’s been a while since
                I’ve specifically used{' '}
                <a
                    href="https://matplotlib.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Matplotlib
                </a>{' '}
                so I just addressed it the same way I would address making any
                graph. I knew I wanted some x data: the student age, and some y
                data: the average test score of the student, and I wanted a line
                of best fit.
            </p>
            <h3 className="code-line" data-line-start="123" data-line-end="124">
                <a id="Crafting_the_py_Mode_Instructions_123"></a>Crafting the
                “//py” Mode Instructions
            </h3>
            <h4 className="code-line" data-line-start="125" data-line-end="126">
                <a id="Initiating_the_Graphing_Process_in_py_Mode_125"></a>
                Initiating the Graphing Process in “//py” Mode
            </h4>
            <p
                className="has-line-data"
                data-line-start="127"
                data-line-end="128"
            >
                The first step comes from pasting in the three prompts I formed
                to define “//py” mode found in the{' '}
                <a href="/blog/how_will_coders_co_program_with_ai#1_191">
                    footer
                </a>
                . This process has been tested to be repeatable in recreating
                the conditions to use “//py” mode in ChatGPT.
            </p>
            <p
                className="has-line-data"
                data-line-start="129"
                data-line-end="130"
            >
                Once the environment is set up, we can start our prompt. The
                opening tag and bracket tells the AI everything in the following
                block should be in “//py” mode
            </p>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="132"
                    data-line-end="134"
                >
                    //py &#123;
                </code>
            </pre>
            <p
                className="has-line-data"
                data-line-start="135"
                data-line-end="136"
            >
                The first function defined was the
                <code>graph</code> function, designed to create a graph using
                variables representing data, x and y values, axis labels, and
                any extra options for customization. Notice how I simply
                instructed it to “interpret extra options as best you can.”
                Impressively, ChatGPT took this directive and skillfully
                developed the function, adeptly parsing and applying the extra
                options I specified when calling the function to generate the
                graph.
            </p>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="138"
                    data-line-end="140"
                >
                    {' '}
                    //f graph data xVar yVar xLabel yLabel extra_options creates
                    a graph using the xVar and yVar data from the data variable
                    and labels the axis with xLabel and yLabel, interpret extra
                    options as best you can
                </code>
            </pre>
            <p
                className="has-line-data"
                data-line-start="141"
                data-line-end="142"
            >
                Next I defined some parse function where I say “just parse the
                data to be used in a graph in <em>some</em> way”, making the AI
                potentially look ahead at future commands to understand how best
                to process the data for future use.
            </p>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="144"
                    data-line-end="146"
                >
                    {' '}
                    //f parse data interpret the best way to parse the data into
                    a python data structure to be used later in a graph
                </code>
            </pre>
            <p
                className="has-line-data"
                data-line-start="147"
                data-line-end="148"
            >
                I also added an average test score. Though in a later test, I
                left this line out and the AI actually figured out to calculate
                the average as part of the parse data function, showing this
                mode can be pushed even further with natural language.
            </p>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="150"
                    data-line-end="152"
                >
                    {' '}
                    //f averageTestScore data calculates average test score from
                    data given
                </code>
            </pre>
            <p
                className="has-line-data"
                data-line-start="153"
                data-line-end="154"
            >
                The data was input in a straightforward natural language format,
                providing the foundation for the graph.
            </p>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="156"
                    data-line-end="160"
                >
                    {' '}
                    //define data &#123;Student1 is age: 18 with test scores:
                    77, 85, 75, 51, 69 ... *Students 2 - 11 left out for blog*
                    Student12 is age: 19 with test scores: 83, 52, 95, 73,
                    72&#125;
                </code>
            </pre>
            <p
                className="has-line-data"
                data-line-start="161"
                data-line-end="162"
            >
                The final step involved using the
                <code>parse</code> function to prepare the data (
                <code>parsedData</code>) and then graphing it with specified
                parameters, including extra natural language options like
                “points should be blue” and “graph a line of best fit”.
            </p>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="164"
                    data-line-end="168"
                >
                    {' '}
                    //define parsedData //parse data //graph parsedData
                    //student.age &#123;//averageTestScore
                    student.testScores&#125; &quot;Student Age&quot;
                    &quot;Average Test Scores&quot; &#123;points should be blue,
                    graph a line of best fit&#125;
                </code>
            </pre>
            <p
                className="has-line-data"
                data-line-start="169"
                data-line-end="170"
            >
                We finally close the opening “//py” tag with a closing bracket
                and could call or use any regular prompt messages or Nova Mode
                features following this block.
            </p>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="172"
                    data-line-end="174"
                >
                    &#125;
                </code>
            </pre>
            <h3 className="code-line" data-line-start="175" data-line-end="176">
                <a id="The_Outcome_A_Fully_Functional_Graph_175"></a>The
                Outcome: A Fully Functional Graph
            </h3>
            <figure
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={TestGraph}
                    alt="Created Graph"
                    className="blog-graph"
                />
            </figure>
            <p
                className="has-line-data"
                data-line-start="179"
                data-line-end="180"
            >
                This exercise with “//py” mode showcased the AI's remarkable
                ability to understand and implement complex instructions. The AI
                had to interpret the entire set of instructions, including the
                additional options provided later, and successfully generated a
                graph that met all specified criteria.
            </p>
            <p
                className="has-line-data"
                data-line-start="181"
                data-line-end="182"
            >
                This section demonstrates “//py” mode’s versatility in handling
                abstract concepts and translating them into functional code,
                highlighting its potential for creative and practical
                applications in data visualization.
            </p>
            <h2 className="code-line" data-line-start="183" data-line-end="184">
                <a id="Looking_Forward_The_Expanding_Horizons_of_py_Mode_183"></a>
                Looking Forward: The Expanding Horizons of “//py” Mode
            </h2>
            <p
                className="has-line-data"
                data-line-start="185"
                data-line-end="186"
            >
                The four examples we’ve explored showcase “//py” mode’s current
                strengths and practical applications. However, its potential
                extends far beyond today’s capabilities. While Python’s
                readability already makes it a favorite among coders, “//py”
                mode adds an intuitive, natural language layer that can
                significantly enhance understanding and efficiency. This feature
                becomes even more valuable when considering more complex and
                less readable languages like Perl, where translating natural
                language into code could be a game-changer.
            </p>
            <p
                className="has-line-data"
                data-line-start="187"
                data-line-end="188"
            >
                Looking ahead, if the AI continues to evolve in understanding
                and translating code logic, “//py” mode could become a universal
                translator for programming languages. The prospect of seamlessly
                converting logic into languages like Rust, Java, or C is not
                just a possibility but is on the cusp of realization. This
                functionality, somewhat available through current AI
                capabilities of translating code between languages, points
                towards a future where barriers between different programming
                languages become increasingly blurred, opening up new realms of
                coding efficiency and creativity.
            </p>
            <br />
            <br />
            <br />
            <h4>Share This Article:</h4>
            <div className="share-icons">
                <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://harrisgreenstein.com/blog/how_will_coders_co_program_with_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                    href="https://twitter.com/intent/tweet?url=https://harrisgreenstein.com/blog/how_will_coders_co_program_with_ai&text=Check out Harris Greenstein's latest blog post about using chat gpt to program with natural language"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://harrisgreenstein.com/blog/how_will_coders_co_program_with_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                    href="mailto:?subject=How Will Coders Co-program with AI?&body=Check out this blog post by Harris Greenstein at https://harrisgreenstein.com/blog/how_will_coders_co_program_with_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>

                <button onClick={copyToClipboard}>
                    <FontAwesomeIcon icon={faLink} />
                </button>
            </div>
            <br />
            <h4 className="code-line" data-line-start="107" data-line-end="108">
                <a id="Graphing_with_Natural_Language_Data_A_Creative_Exploration_with_py_Mode_107"></a>
                About The Author:
            </h4>
            <p
                className="has-line-data"
                data-line-start="187"
                data-line-end="188"
            >
                <em>
                    {' '}
                    Harris Greenstein is a recent Computer Science graduate from
                    Cornell University's College of Engineering, where he
                    specialized in Artificial Intelligence, complemented by a
                    minor in Business for Engineers. His academic journey has
                    been marked by hands-on projects that deeply explored AI
                    technologies and their practical applications. Harris is
                    actively pursuing opportunities in software engineering and
                    AI, aiming to apply his knowledge and skills to innovate and
                    contribute in these dynamic fields. Learn more about Harris
                    and contact him on the website's{' '}
                    <a href="/"> homepage here</a>{' '}
                </em>
            </p>
            <DiscussionEmbed
                shortname="harrisgreenstein"
                config={{
                    url: 'https://harrisgreenstein.com/blog/how_will_coders_co_program_with_ai',
                    identifier: '1',
                    title: 'How Will Coders Co-Program With AI?',
                    language: 'en',
                }}
            />
            <h1 className="code-line" data-line-start="189" data-line-end="190">
                <a id="Footer_189"></a>Footer
            </h1>
            <h1 className="code-line" data-line-start="191" data-line-end="192">
                <a id="1_191"></a>1.
            </h1>
            <h2 className="code-line" data-line-start="192" data-line-end="193">
                <a id="Prompts_to_activate_py_mode_192"></a>Prompts to activate
                “//py” mode
            </h2>
            <h4 className="code-line" data-line-start="193" data-line-end="194">
                <a id="can_be_inputted_together_193"></a>(can be inputted
                together)
            </h4>
            <p>
                <strong>
                    Please note, the following prompts will only work correctly
                    if you have already set up{' '}
                    <a
                        href="https://www.novaspivack.com/technology/nova-mode-the-ultimate-chatgpt-custom-instruction"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nova Mode
                    </a>
                </strong>
            </p>
            <h5>
                <a href="/blog/how_will_coders_co_program_with_ai#footerLink1">
                    Return to the linked part of the article
                </a>
            </h5>
            <h4 className="code-line" data-line-start="195" data-line-end="196">
                <a id="Prompt_1_195"></a>Prompt 1
            </h4>
            <blockquote>
                <p
                    className="has-line-data"
                    data-line-start="197"
                    data-line-end="198"
                >
                    //meta I want to create a new feature for code interpreter
                    specifically that is prefixed with the //py tag that
                    specifies that I want the following functions or methods to
                    be interpreted as correct python code. Additionally, I
                    should be able to define py functions by doing //py //f x y
                    for example //py //f define x y is a function that defines a
                    new variable called x in the python script with initial
                    value of y. This should stack with existing Nova commands
                    for example, //! ((//define x, 1), 5) would loop defining x
                    as initial value 1, 5 times
                </p>
            </blockquote>
            <h4 className="code-line" data-line-start="199" data-line-end="200">
                <a id="Prompt_2_199"></a>Prompt 2:
            </h4>
            <blockquote>
                <p
                    className="has-line-data"
                    data-line-start="201"
                    data-line-end="202"
                >
                    The function notation in the //py mode should be abstracted
                    to the least python code possible, for instance in the
                    previous example of creating a define method, it shouldn’t
                    necessarily make a new method just for defining x but rather
                    should define a variable x in the current scope as a single
                    line then allow x’s value to be used in other functions or
                    conditional statements. If the defined function does mimic a
                    useful function abstraction in python then do create a
                    python function but for simple actions like define,
                    interpret them as the functional equivalent code in the
                    current scope
                </p>
            </blockquote>
            <h4 className="code-line" data-line-start="203" data-line-end="204">
                <a id="Prompt_3_203"></a>Prompt 3
            </h4>
            <blockquote>
                <p
                    className="has-line-data"
                    data-line-start="205"
                    data-line-end="206"
                >
                    There should be implied functions of all basic operators and
                    comparison operators in python for example //* x y would act
                    like lambda notation applying the * operation to x and y
                    //&gt;= x y would return the boolean value that x is greater
                    than or equal to y
                </p>
            </blockquote>
            <h1 className="code-line" data-line-start="208" data-line-end="209">
                <a id="2_208"></a>2.
            </h1>
            <h2 className="code-line" data-line-start="210" data-line-end="211">
                <a id="Two_Sum_py_mode_input_210"></a>Two Sum “//py” mode input:
            </h2>
            <h5>
                <a href="/blog/how_will_coders_co_program_with_ai#footerLink2">
                    Return to the linked part of the article
                </a>
            </h5>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="213"
                    data-line-end="226"
                >
                    //py &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;//f length x returns length of array
                    x;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;//f sumTarget numArray, intX:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//!( (//!
                    (//if iteration of outer loop is not equal to iteration of
                    inner loop then
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//if
                    //== (//+ (the num at the index of the outer loop) (the num
                    at the index of the inner loop)) (intX) then return a new
                    array of two elements, the outer index and inner index
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;), //length
                    numArray))
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, //length
                    numArray)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a new
                    empty array [End Function sumTarget]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;//sumTarget [5, 20, 8, -2, 14], 19
                    &#125;
                    <br />
                </code>
            </pre>
            <h2 className="code-line" data-line-start="228" data-line-end="229">
                <a id="Translated_Python_Code_228"></a>Translated Python Code:
            </h2>
            <pre>
                <code
                    className="has-line-data language-python"
                    data-line-start="272"
                    data-line-end="291"
                >
                    <span className="hljs-function">
                        <span className="hljs-keyword">def</span>{' '}
                        <span className="hljs-title">traverseGraph</span>
                        <span className="hljs-params">(length, width)</span>:
                    </span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-comment"># Initialize the grid</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;grid = [[
                    <span className="hljs-number">0</span>{' '}
                    <span className="hljs-keyword">for</span> _{' '}
                    <span className="hljs-keyword">in</span> range(width)]{' '}
                    <span className="hljs-keyword">for</span> _{' '}
                    <span className="hljs-keyword">in</span> range(length)]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;grid[
                    <span className="hljs-number">0</span>][
                    <span className="hljs-number">0</span>] ={' '}
                    <span className="hljs-number">1</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-comment"># Populate the grid</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">for</span> i{' '}
                    <span className="hljs-keyword">in</span> range(length):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">for</span> j{' '}
                    <span className="hljs-keyword">in</span> range(width):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">if</span> i &gt;{' '}
                    <span className="hljs-number">0</span>: grid[i][j] += grid[i
                    - <span className="hljs-number">1</span>][j]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">if</span> j &gt;{' '}
                    <span className="hljs-number">0</span>: grid[i][j] +=
                    grid[i][j - <span className="hljs-number">1</span>]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">return</span> grid[length -{' '}
                    <span className="hljs-number">1</span>][width -{' '}
                    <span className="hljs-number">1</span>]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-comment">
                        # Test the function with the provided dimensions
                    </span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;traverseGraph(
                    <span className="hljs-number">5</span>,{' '}
                    <span className="hljs-number">8</span>)<br />
                </code>
            </pre>
            <h1 className="code-line" data-line-start="248" data-line-end="249">
                <a id="3_248"></a>3.
            </h1>
            <h2 className="code-line" data-line-start="249" data-line-end="250">
                <a id="Unique_Paths_py_mode_input_249"></a>Unique Paths “//py”
                mode input:
            </h2>
            <h5>
                <a href="/blog/how_will_coders_co_program_with_ai#footerLink3">
                    Return to the linked part of the article
                </a>
            </h5>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="252"
                    data-line-end="268"
                >
                    //py &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;//f traverseGraph length width:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//define
                    grid (2d array of length and width equal to params)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//define
                    grid(0, 0) 1<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//! (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//!(
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//if
                    //&gt;= (//- (current length) (1)) 0 then
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//define
                    grid (current length, current width) (grid(//- current
                    length, 1), current width)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//if
                    //&gt;= (//- (current width) (1)) 0 then
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//define
                    grid (current length, current width) (grid(current length,
                    (//- current width, 1)))
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),width
                    (iterator current width))
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),length
                    (iterator current length))
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RETURN
                    grid((//- length, 1), (//- width, 1))
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;//traverseGraph 5 8<br />
                    &#125;
                    <br />
                </code>
            </pre>
            <h2 className="code-line" data-line-start="269" data-line-end="270">
                <a id="Translated_Python_Code_269"></a>Translated Python Code:
            </h2>
            <pre>
                <code
                    class="has-line-data language-python"
                    data-line-start="272"
                    data-line-end="291"
                >
                    <span class="hljs-function">
                        <span class="hljs-keyword">def </span>
                        <span class="hljs-title">traverseGraph</span>
                        <span class="hljs-params">(length, width)</span>:
                    </span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="hljs-comment"># Initialize the grid</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;grid = [
                    <span class="hljs-number">0</span>{' '}
                    <span class="hljs-keyword">for</span> _{' '}
                    <span class="hljs-keyword">in</span> range(width)]{' '}
                    <span class="hljs-keyword">for</span> _{' '}
                    <span class="hljs-keyword">in</span> range(length)]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;grid[
                    <span class="hljs-number">0</span>][
                    <span class="hljs-number">0</span>] ={' '}
                    <span class="hljs-number">1</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="hljs-comment"># Populate the grid</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="hljs-keyword">for</span> i{' '}
                    <span class="hljs-keyword">in</span> range(length):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="hljs-keyword">for</span> j{' '}
                    <span class="hljs-keyword">in</span> range(width):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="hljs-keyword">if</span> i &gt;={' '}
                    <span class="hljs-number">0</span>:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grid[i][j]
                    += grid[i - <span class="hljs-number">1</span>][j]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="hljs-keyword">if</span> j &gt;={' '}
                    <span class="hljs-number">0</span>:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grid[i][j]
                    += grid[i][j - <span class="hljs-number">1</span>]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="hljs-keyword">return</span> grid[length -{' '}
                    <span class="hljs-number">1</span>][width -{' '}
                    <span class="hljs-number">1</span>]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="hljs-comment">
                        # Test the function with the provided dimensions
                    </span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;traverseGraph(
                    <span class="hljs-number">5</span>,{' '}
                    <span class="hljs-number">8</span>)
                    <br />
                </code>
            </pre>
            <h1 className="code-line" data-line-start="292" data-line-end="293">
                <a id="4_292"></a>4.
            </h1>
            <h2 className="code-line" data-line-start="294" data-line-end="295">
                <a id="Special_Positions_in_a_Binary_Matrix_py_mode_input_294"></a>
                Special Positions in a Binary Matrix “//py” mode input:
            </h2>
            <h5>
                <a href="/blog/how_will_coders_co_program_with_ai#footerLink4">
                    Return to the linked part of the article
                </a>
            </h5>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="297"
                    data-line-end="323"
                >
                    Extend //! loop to accept an iterator name after the number
                    of iterations
                    <br />
                    //py&#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;//f rowsAndCols grid returns number
                    of rows and cols in grid as tuple
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;//f countElements grid:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//define
                    (rows, cols) //rowsAndCols
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//define
                    boolGrid 2d array of boolean values dimensions rows x cols
                    default all true
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//! (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//define
                    currentRow grid(i)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//if
                    &#123;currentRow does not contain exactly 1 element value 1
                    and the rest 0&#125; then //= boolGrid(i) (all false)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),rows
                    (iterator i))
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//! (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//define
                    currentCol grid(column i)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//if
                    &#123;currentCol does not contain exactly 1 element value 1
                    and the rest 0&#125; then //= boolGrid(column i) (all false)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//define
                    result 0<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//! (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//!(
                    if &#123;the current element in grid is a 1 and the same
                    index in boolGrid is true&#125; then add 1 to result
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;), cols
                    (iterator col))
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, rows
                    (iterator row))
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//return
                    result
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;//countElements (grid =
                    [[1,0,0],[0,1,0],[0,0,1]]) &#125;
                    <br />
                </code>
            </pre>
            <h3 className="code-line" data-line-start="324" data-line-end="325">
                <a id="Translated_Python_Code_324"></a>Translated Python Code:
            </h3>
            <pre>
                <code
                    className="has-line-data"
                    data-line-start="327"
                    data-line-end="353"
                >
                    <span className="hljs-function">
                        <span className="hljs-keyword">def</span>{' '}
                        <span className="hljs-title">rowsAndCols</span>(grid):
                    </span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;return (len(grid), len(grid[0]) if
                    grid else 0)
                    <br />
                    <br />
                    <span className="hljs-function">
                        <span className="hljs-keyword">def</span>{' '}
                        <span className="hljs-title">countElements</span>(grid):
                    </span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;rows, cols = rowsAndCols(grid)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;boolGrid = [[
                    <span className="hljs-keyword">True</span>{' '}
                    <span className="hljs-keyword">for</span> _{' '}
                    <span className="hljs-keyword">in</span> range(cols)]{' '}
                    <span className="hljs-keyword">for</span> _{' '}
                    <span className="hljs-keyword">in</span> range(rows)]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-comment"># Check rows</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">for</span> i{' '}
                    <span className="hljs-keyword">in</span> range(rows):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">if</span> grid[i].count(
                    <span className="hljs-number">1</span>) !={' '}
                    <span className="hljs-number">1</span>{' '}
                    <span className="hljs-keyword">or</span> sum(grid[i]) !={' '}
                    <span className="hljs-number">1</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boolGrid[i]
                    = [<span className="hljs-keyword">False</span>] * cols
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-comment"># Check columns</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">for</span> j{' '}
                    <span className="hljs-keyword">in</span> range(cols):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;column =
                    [grid[i][j] <span className="hljs-keyword">for</span> i{' '}
                    <span className="hljs-keyword">in</span> range(rows)]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">if</span> column.count(
                    <span className="hljs-number">1</span>) !={' '}
                    <span className="hljs-number">1</span>{' '}
                    <span className="hljs-keyword">or</span> sum(column) !={' '}
                    <span className="hljs-number">1</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">for</span> row{' '}
                    <span className="hljs-keyword">in</span> boolGrid: row[j] ={' '}
                    <span className="hljs-keyword">False</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-comment"># Count valid elements</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;result ={' '}
                    <span className="hljs-number">0</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">for</span> i{' '}
                    <span className="hljs-keyword">in</span> range(rows):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">for</span> j{' '}
                    <span className="hljs-keyword">in</span> range(cols):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">if</span> grid[i][j] =={' '}
                    <span className="hljs-number">1</span>{' '}
                    <span className="hljs-keyword">and</span> boolGrid[i][j]:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result
                    += <span className="hljs-number">1</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="hljs-keyword">return</span> result
                    <br />
                </code>
            </pre>
        </section>
    );
}
export default Blog;
