// Blog Posts Data
const blogPosts = [
    {
        id: '1',
        title: '10 Essential Tips for Daily Home Cleaning',
        excerpt: 'Discover the most effective daily cleaning routines that will keep your home spotless with minimal effort.',
        content: `
            <h2>Start Your Day Right</h2>
            <p>A clean home starts with a consistent daily routine. Here are 10 essential tips to maintain a spotless living space.</p>
            
            <h3>1. Make Your Bed Every Morning</h3>
            <p>Starting your day by making your bed sets a productive tone and instantly makes your bedroom look tidier.</p>
            
            <h3>2. Wipe Down Kitchen Surfaces</h3>
            <p>After each meal, take a moment to wipe down countertops, stovetops, and tables to prevent buildup.</p>
            
            <h3>3. Do a Quick Sweep</h3>
            <p>Spend 5 minutes sweeping high-traffic areas daily to keep dirt and debris at bay.</p>
            
            <h3>4. Keep Cleaning Supplies Handy</h3>
            <p>Store cleaning supplies in easily accessible locations to make quick cleanups effortless.</p>
            
            <h3>5. Clean As You Go</h3>
            <p>Whether cooking or working, clean up messes immediately rather than letting them accumulate.</p>
            
            <p>By incorporating these simple habits into your daily routine, you'll maintain a cleaner home with less stress and effort.</p>
        `,
        category: 'Home Cleaning',
        tags: ['daily cleaning', 'cleaning tips', 'home maintenance'],
        author: 'Sarah Johnson',
        date: '2026-01-20',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
        slug: 'essential-tips-daily-home-cleaning'
    },
    {
        id: '2',
        title: 'The Ultimate Kitchen Cleaning Checklist',
        excerpt: 'A comprehensive guide to keeping your kitchen sparkling clean, from countertops to appliances.',
        content: `
            <h2>Kitchen Cleaning Made Easy</h2>
            <p>The kitchen is the heart of every home, and keeping it clean is essential for both hygiene and comfort.</p>
            
            <h3>Daily Tasks</h3>
            <ul>
                <li>Wipe down countertops and stovetop</li>
                <li>Wash dishes or load dishwasher</li>
                <li>Sweep floor</li>
                <li>Empty trash if needed</li>
            </ul>
            
            <h3>Weekly Tasks</h3>
            <ul>
                <li>Clean microwave inside and out</li>
                <li>Wipe down cabinet fronts</li>
                <li>Mop floors thoroughly</li>
                <li>Clean sink and faucet</li>
            </ul>
            
            <h3>Monthly Deep Cleaning</h3>
            <p>Set aside time each month to clean your refrigerator, oven, and organize pantry items.</p>
        `,
        category: 'Kitchen Cleaning',
        tags: ['kitchen', 'cleaning checklist', 'appliances'],
        author: 'Michael Chen',
        date: '2026-01-18',
        image: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=800&h=600&fit=crop',
        slug: 'ultimate-kitchen-cleaning-checklist'
    },
    {
        id: '3',
        title: 'Bathroom Deep Cleaning: A Step-by-Step Guide',
        excerpt: 'Learn how to achieve a spotless bathroom with our detailed deep cleaning guide.',
        content: `
            <h2>Transform Your Bathroom</h2>
            <p>A clean bathroom is crucial for health and comfort. Follow these steps for a thorough deep clean.</p>
            
            <h3>Gather Your Supplies</h3>
            <p>You'll need: all-purpose cleaner, glass cleaner, toilet bowl cleaner, scrub brush, microfiber cloths, and rubber gloves.</p>
            
            <h3>Step 1: Declutter</h3>
            <p>Remove all items from countertops, shower, and bathtub to access all surfaces.</p>
            
            <h3>Step 2: Dust and Sweep</h3>
            <p>Start from the top - dust light fixtures, vents, and work your way down.</p>
            
            <h3>Step 3: Clean the Toilet</h3>
            <p>Apply toilet bowl cleaner and let it sit while you clean other areas.</p>
            
            <h3>Step 4: Tackle the Shower and Tub</h3>
            <p>Spray surfaces with cleaner, scrub tiles and grout, and rinse thoroughly.</p>
        `,
        category: 'Bathroom Cleaning',
        tags: ['bathroom', 'deep cleaning', 'sanitizing'],
        author: 'Emily Rodriguez',
        date: '2026-01-15',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
        slug: 'bathroom-deep-cleaning-guide'
    },
    {
        id: '4',
        title: 'Eco-Friendly Cleaning Solutions You Can Make at Home',
        excerpt: 'Discover natural, effective, and budget-friendly cleaning solutions using common household ingredients.',
        content: `
            <h2>Clean Green</h2>
            <p>You don't need harsh chemicals to achieve a clean home. These eco-friendly solutions are safe, effective, and easy to make.</p>
            
            <h3>All-Purpose Cleaner</h3>
            <p>Mix equal parts water and white vinegar in a spray bottle. Add 10-15 drops of essential oil for fragrance.</p>
            
            <h3>Glass Cleaner</h3>
            <p>Combine 2 cups water, 1/4 cup white vinegar, and 1/2 teaspoon dish soap.</p>
            
            <h3>Baking Soda Scrub</h3>
            <p>Make a paste with baking soda and water for tough stains on sinks, tubs, and tiles.</p>
            
            <h3>Natural Disinfectant</h3>
            <p>Mix 1 cup water with 1/4 cup rubbing alcohol and 10 drops tea tree oil.</p>
            
            <p>These solutions are not only better for the environment but also safer for your family and pets.</p>
        `,
        category: 'Eco-Friendly Cleaning',
        tags: ['eco-friendly', 'natural cleaning', 'DIY'],
        author: 'David Thompson',
        date: '2026-01-12',
        image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&h=600&fit=crop',
        slug: 'eco-friendly-cleaning-solutions'
    },
    {
        id: '5',
        title: 'How to Organize Your Bedroom for Better Sleep',
        excerpt: 'A clean and organized bedroom promotes better sleep quality. Learn our expert tips.',
        content: `
            <h2>Create Your Sleep Sanctuary</h2>
            <p>Your bedroom should be a peaceful retreat that promotes restful sleep.</p>
            
            <h3>Declutter First</h3>
            <p>Remove items that don't belong in the bedroom. Keep surfaces clear.</p>
            
            <h3>Clean Bedding Weekly</h3>
            <p>Wash sheets, pillowcases, and blankets every week for optimal hygiene.</p>
            
            <h3>Dust Regularly</h3>
            <p>Dust can affect sleep quality. Wipe down all surfaces weekly.</p>
            
            <h3>Keep It Cool and Dark</h3>
            <p>Maintain a comfortable temperature and use blackout curtains if needed.</p>
            
            <h3>Organize Closets</h3>
            <p>A tidy closet reduces visual clutter and makes getting dressed easier.</p>
        `,
        category: 'Bedroom Cleaning',
        tags: ['bedroom', 'organization', 'sleep quality'],
        author: 'Sarah Johnson',
        date: '2026-01-10',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
        slug: 'organize-bedroom-better-sleep'
    },
    {
        id: '6',
        title: 'Office Cleaning Tips for Remote Workers',
        excerpt: 'Keep your home office clean and productive with these practical cleaning tips.',
        content: `
            <h2>Productive and Clean Workspace</h2>
            <p>A clean home office enhances focus and productivity.</p>
            
            <h3>Daily Desk Cleanup</h3>
            <p>End each workday by clearing your desk and wiping it down.</p>
            
            <h3>Sanitize Tech Equipment</h3>
            <p>Clean keyboards, mouse, and screens regularly with appropriate cleaners.</p>
            
            <h3>Organize Cables</h3>
            <p>Use cable organizers to prevent tangled messes under your desk.</p>
            
            <h3>Weekly Dusting</h3>
            <p>Dust accumulates quickly on office equipment. Clean weekly.</p>
            
            <h3>Air Quality</h3>
            <p>Open windows regularly and consider adding plants to improve air quality.</p>
        `,
        category: 'Office Cleaning',
        tags: ['office', 'home office', 'productivity'],
        author: 'Michael Chen',
        date: '2026-01-08',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
        slug: 'office-cleaning-tips-remote-workers'
    },
    {
        id: '7',
        title: 'Spring Cleaning: The Complete Room-by-Room Guide',
        excerpt: 'Tackle your spring cleaning with confidence using our comprehensive guide.',
        content: `
            <h2>Spring Cleaning Success</h2>
            <p>Spring cleaning is the perfect opportunity to deep clean and refresh your entire home.</p>
            
            <h3>Create a Plan</h3>
            <p>List all rooms and tasks. Break the project into manageable chunks over several days or weeks.</p>
            
            <h3>Start with Decluttering</h3>
            <p>Go through each room and remove items you no longer need or use.</p>
            
            <h3>Work Top to Bottom</h3>
            <p>Always clean from ceiling to floor in each room for efficiency.</p>
            
            <h3>Don't Forget Hidden Areas</h3>
            <p>Clean behind appliances, under furniture, and inside cabinets.</p>
            
            <h3>Finish with Windows</h3>
            <p>Clean windows inside and out for maximum natural light.</p>
        `,
        category: 'Deep Cleaning',
        tags: ['spring cleaning', 'deep cleaning', 'seasonal'],
        author: 'Emily Rodriguez',
        date: '2026-01-05',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop',
        slug: 'spring-cleaning-room-by-room-guide'
    },
    {
        id: '8',
        title: 'Pet-Friendly Cleaning: Safe and Effective Methods',
        excerpt: 'Keep your home clean while ensuring safety for your furry family members.',
        content: `
            <h2>Clean and Pet-Safe</h2>
            <p>Maintaining a clean home with pets requires special consideration for their safety.</p>
            
            <h3>Avoid Toxic Chemicals</h3>
            <p>Many common cleaners are harmful to pets. Choose pet-safe alternatives.</p>
            
            <h3>Manage Pet Hair</h3>
            <p>Vacuum regularly with a pet-hair attachment and use lint rollers on furniture.</p>
            
            <h3>Clean Pet Areas Weekly</h3>
            <p>Wash pet beds, toys, and food bowls regularly to prevent odors and bacteria.</p>
            
            <h3>Natural Deodorizers</h3>
            <p>Use baking soda to absorb odors naturally without harming pets.</p>
            
            <h3>Safe Floor Cleaning</h3>
            <p>Ensure floors are completely dry before allowing pets back into cleaned areas.</p>
        `,
        category: 'Home Cleaning',
        tags: ['pet-friendly', 'safe cleaning', 'pets'],
        author: 'David Thompson',
        date: '2026-01-03',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop',
        slug: 'pet-friendly-cleaning-methods'
    }
];

const categories = [
    {
        id: 'home-cleaning',
        name: 'Home Cleaning',
        slug: 'home-cleaning',
        description: 'General tips and tricks for maintaining a clean home',
        icon: '🏠'
    },
    {
        id: 'kitchen-cleaning',
        name: 'Kitchen Cleaning',
        slug: 'kitchen-cleaning',
        description: 'Keep your kitchen spotless and hygienic',
        icon: '☕'
    },
    {
        id: 'bathroom-cleaning',
        name: 'Bathroom Cleaning',
        slug: 'bathroom-cleaning',
        description: 'Deep cleaning and maintenance for bathrooms',
        icon: '💧'
    },
    {
        id: 'bedroom-cleaning',
        name: 'Bedroom Cleaning',
        slug: 'bedroom-cleaning',
        description: 'Create a peaceful and clean sleeping environment',
        icon: '🛏️'
    },
    {
        id: 'office-cleaning',
        name: 'Office Cleaning',
        slug: 'office-cleaning',
        description: 'Maintain a productive and organized workspace',
        icon: '🏢'
    },
    {
        id: 'eco-friendly-cleaning',
        name: 'Eco-Friendly Cleaning',
        slug: 'eco-friendly-cleaning',
        description: 'Natural and sustainable cleaning solutions',
        icon: '🌿'
    },
    {
        id: 'deep-cleaning',
        name: 'Deep Cleaning',
        slug: 'deep-cleaning',
        description: 'Comprehensive guides for thorough cleaning',
        icon: '✨'
    }
];
