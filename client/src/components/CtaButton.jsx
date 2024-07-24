export default function CtaButton() {
    return (
        <div className="mt-10 flex items-center gap-x-6 lg:justify-start">
            <a
                href="#"
                className="rounded-md bg-[#1a1a1a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
            </a>
        </div>
    )
}