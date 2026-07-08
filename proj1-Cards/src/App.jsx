import JobCard from './JobCard'

const jobs = [
  { logo: 'https://imgs.search.brave.com/VaPpXqEJLdIWx7txvtpuqIlJica0TTEjPb8Aj1ACQDc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMjk5MTcxYzBl/M2E4ZTFkZTVlMDBi/ODJjOGZiNzNjZjRm/ZDkxMzMxN2M3ZTA4/MGRiZmYzNGU2YTk0/YmFlZTI5Zi93d3cu/YW1hem9uLmluLw',  company: 'Amazon',  posted: '5 days ago',    title: 'Senior UI/UX Designer',   tags: ['Part-time', 'Senior level'],      salary: '$120/hr',      location: 'San Francisco, CA', saved: false },
  { logo: 'https://imgs.search.brave.com/g17BH7ApM9d8-w9e-JPSNcH8j_6dKtlc-P0jl3lYp6Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGIyNDZlZGM5/Y2MxOTI5ODg1NTU5/YTA0YTYxNTEwMjZi/NTZlZDY4NGE2ODVm/OGVjNTg4MzE3ZDMz/YjdhNDI4Yi93d3cu/Z29vZ2xlLmNvbS8',  company: 'Google',  posted: '30 days ago',   title: 'Graphic Designer',         tags: ['Full-time', 'Flexible schedule'], salary: '$150 – 220k',  location: 'Mountain View, CA',  saved: true  },
  { logo: 'https://imgs.search.brave.com/Lzam8sYUPmdHlNEEbu5FVDhzzZBJ9reDuyLed-NhpDY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNTNlMWE2YThk/NTk2M2IxOTRmM2Iz/ODFhMzMzYjU1MjY4/ZDAwODc4NWI2N2My/ZGIxZDc1M2YzMjQz/ZDgxYTU5My9kcmli/YmJsZS5jb20v',company: 'Dribbble',posted: '18 days ago',   title: 'Senior Motion Designer',   tags: ['Contract', 'Remote'],             salary: '$85/hr',       location: 'San Francisco, CA', saved: false },
  { logo: 'https://imgs.search.brave.com/Alhb3GhgjoPmrNi1KJoonNzNBpKwJCkZHKFYg01xFcQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTJmNzg1NTAy/OWU3ZDg4NjAxYjQ5/OTY2NWVlZDk1MzVi/MjEzZmI4OGE3MWI4/NmU1YmM3NWUxYjNh/NGJlYjIwZi93d3cu/bWV0YS5jb20v',    company: 'Meta',    posted: '3 months ago',  title: 'UX Designer',              tags: ['Full-time', 'In office'],         salary: '$200 – 250k',  location: 'New York, NY',      saved: true  },
  { logo: 'https://imgs.search.brave.com/AeQ20x6-xN03GNCpFM9cDMLDH1pyMYOrUQDfIg8AwAQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzJkOTk3Yzhh/M2QxZWZiMjliMzQy/ZjJkNjEzOTE0MTg2/OGRhYjRhOTEzYzNj/YTVjZjFkODkxZDQ1/ZWRlODg4NS93d3cu/YWlyYm5iLmNvLmlu/Lw',  company: 'Airbnb',  posted: '1 day ago',     title: 'Junior UX/UI Designer',    tags: ['Contract', 'Remote'],             salary: '$100/hr',      location: 'San Francisco, CA', saved: false },
  { logo: 'https://imgs.search.brave.com/vlwJnK9xz7Tlv_9Kw_3p0lONX0o148ycfIJHHzgsuNE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2ZhL0Fw/cGxlX2xvZ29fYmxh/Y2suc3ZnLzI1MHB4/LUFwcGxlX2xvZ29f/YmxhY2suc3ZnLnBu/Zz91dG1fc291cmNl/PXd3dy53aWtpZGF0/YS5vcmcmYW1wO3V0/bV9jYW1wYWlnbj1y/ZXN0JmFtcDt1dG1f/Y29udGVudD10aHVt/Ym5haWw',   company: 'Apple',   posted: '6 days ago',    title: 'Graphic Designer',         tags: ['Full-time', 'Flexible schedule'], salary: '$85 – 120k',   location: 'Cupertino, CA',     saved: true  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="grid grid-cols-3 gap-5 max-w-5xl w-full">
        {jobs.map((job, i) => <JobCard key={i} {...job} />)}
      </div>
    </div>
  )
}
