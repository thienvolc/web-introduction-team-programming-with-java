import { Link } from 'react-router-dom';
export function Home() {
  return <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">
                Hệ Thống Quản Lý Thuê Xe
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Giải pháp hiện đại cho việc quản lý dịch vụ thuê xe một cách
                hiệu quả và chuyên nghiệp
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/team" className="inline-flex h-11 items-center justify-center rounded-full bg-primary text-primary-foreground px-8 text-sm font-medium shadow-lg transition-colors hover:bg-primary/90">
                Về Chúng Tôi
              </Link>
              <Link to="/process" className="inline-flex h-11 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground">
                Xem Quy Trình
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                <span className='h-6 w-6'>🎯</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
                Mục Tiêu Dự Án
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Xây dựng hệ thống quản lý thuê xe hiện đại</li>
                <li>• Tối ưu hóa quy trình đặt và quản lý xe</li>
                <li>• Nâng cao trải nghiệm người dùng</li>
                <li>• Đảm bảo tính bảo mật và độ tin cậy</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                <span className='h-6 w-6'>🚩</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
                Tính Năng Chính
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Quản lý đội xe và lịch thuê</li>
                <li>• Hệ thống đặt xe trực tuyến</li>
                <li>• Theo dõi trạng thái xe thời gian thực</li>
                <li>• Báo cáo và thống kê chi tiết</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>;
}