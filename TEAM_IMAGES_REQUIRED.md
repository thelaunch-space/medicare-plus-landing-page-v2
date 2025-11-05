# Team Member Images Required

The TeamSection component requires the following image files to be placed in the `/public` folder:

## Required Image Files

### 1. Dr. Subramanian Kannan
- **Filename**: `dr-kannan.jpg`
- **Location**: `/public/dr-kannan.jpg`
- **Recommended specs**:
  - Format: JPG or PNG
  - Dimensions: 400x400px minimum (square)
  - Professional headshot
  - Clean background
  - File size: < 200KB (optimized)

### 2. Sheryl S. Salis
- **Filename**: `sheryl-salis.jpg`
- **Location**: `/public/sheryl-salis.jpg`
- **Recommended specs**:
  - Format: JPG or PNG
  - Dimensions: 400x400px minimum (square)
  - Professional headshot
  - Clean background
  - File size: < 200KB (optimized)

## Image Guidelines

- **Aspect Ratio**: 1:1 (square) preferred
- **Quality**: High-resolution professional photos
- **Style**: Professional headshots with clean backgrounds
- **Consistency**: Try to maintain similar lighting and style across all photos
- **Format**: JPG preferred for smaller file size, PNG if transparency needed

## Fallback Behavior

If an image file is not found, the component will display:
- Initials in a gradient circle (e.g., "SK" for Subramanian Kannan)
- Blue gradient background

## Future Team Members

When adding the Psychologist and Program Coordinator photos, follow the same naming convention and place files in `/public`:
- `/public/psychologist-name.jpg`
- `/public/program-coordinator-name.jpg`

Update the `team` array in `src/components/sections/TeamSection.tsx` with the correct `imagePath` values.
