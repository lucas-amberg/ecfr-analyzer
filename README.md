# eCFR Analytics Platform

A web application for analyzing and tracking regulatory changes in the Electronic Code of Federal Regulations (eCFR). This platform helps monitor agency efficiency, regulation complexity, and correction patterns across federal agencies.

## Features

### Agency Analysis

- **Agency Directory**: Browse all federal agencies and their sub-agencies
- **Jurisdiction Tracking**: View which titles and chapters each agency regulates
- **Word Count Analysis**: Calculate and track the size of each agency's regulations
- **Efficiency Scoring**: Evaluate agencies based on:
    - Regulation complexity (words per chapter)
    - Correction response time (days to fix errors)

### Correction Tracking

- **Timeline Visualization**: View corrections over time with interactive charts
- **Detailed Analysis**:
    - Track how quickly agencies fix regulatory errors
    - Monitor correction patterns and frequencies
    - Analyze correction types and affected sections
- **Agency Filtering**: Filter corrections by specific agencies
- **Date Range Selection**: Analyze corrections within custom time periods

### Content Statistics

- **Word Count Metrics**: Track regulation size over time
- **Automated Analysis**: Regular updates of word counts and metrics
- **Historical Tracking**: Monitor changes in regulation complexity

## Technical Stack

- **Frontend**: Next.js with React
- **UI Components**: Custom components using Shadcn UI and Tailwind CSS
- **Data Visualization**: Recharts for interactive charts
- **API Integration**: Direct integration with eCFR API
- **Database**: Supabase for data persistence
- **State Management**: TanStack Query (React Query)

## Data Sources

- eCFR API for regulatory content and corrections
- Custom database for tracking word counts and historical data
- Agency hierarchy and jurisdiction mapping

## Purpose

This platform aims to improve regulatory oversight by:

1. Providing transparency into agency performance
2. Tracking regulatory complexity
3. Monitoring correction efficiency
4. Enabling data-driven regulatory management

## Target Users

- Federal agency staff
- Policy researchers
- Regulatory compliance officers
- Public oversight groups
