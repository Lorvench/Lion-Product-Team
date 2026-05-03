# LHP Website v0

This is the Lion Hospitality Partners website project.

It uses:

- Next.js (frontend website)
- Sanity (content management)

## 1. How To Run The Project Locally

### Step 1: Install packages

```bash
npm install
```

### Step 2: Add environment variables

Create a `.env.local` file in the project root.

Copy from `.env.local.example` and fill in real values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### Step 3: Start the website

```bash
npm run dev
```

Open this in your browser:

- http://localhost:3000


### Step 4: Start Sanity Studio

This project uses Sanity inside the same app config.

If you already have a Studio route in the app, open:

- http://localhost:3000/studio

If `/studio` is not available yet, add a Studio route first (or run Studio separately using Sanity CLI).

## 2. How To Edit Content In Sanity

1. Open Sanity Studio.
2. In the left menu, choose the content type you want:
   - Site Settings
   - Page
   - Property
   - Service
   - Inquiry Type
   - FAQ
3. Click a document to edit.
4. Change the fields.
5. Click `Publish`.

Your website will use the new content after publish (depending on how that page is connected to Sanity).

## 3. How To Add Or Edit A Property

1. Open Sanity Studio.
2. Click `Property` in the left menu.
3. Click `Create new`.
4. Fill in the fields:
   - Name
   - Slug
   - Location
   - Description
   - Image
5. Click `Publish`.

To edit an existing property:

1. Open `Property`.
2. Click the property you want.
3. Update fields.
4. Click `Publish`.

## 4. How To Update Contact Info

Contact details are in `Site Settings`.

1. Open Sanity Studio.
2. Click `Site Settings`.
3. Update fields like:
   - Email
   - Phone
   - Address
   - Social links
4. Click `Publish`.

## 5. Useful Commands

```bash
npm run dev    # run local dev server
npm run build  # build production version
npm run start  # run production build locally
npm run lint   # run lint checks
```

## 6. Known Limitations (Current v0)

- Some website sections may still use local placeholder/static content.
- Not every page/section may be fully connected to Sanity yet.
- No user authentication/admin roles in the website app yet.
- No final production deployment guide in this file yet.
- Placeholder images/content may still exist in some records.

## 7. Simple Troubleshooting

- If Sanity content does not load:
  - Check `.env.local` values.
  - Restart the dev server after editing `.env.local`.
- If `Publish` fails:
  - Make sure required fields are filled.
- If Studio is blank:
  - Confirm `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are correct.
