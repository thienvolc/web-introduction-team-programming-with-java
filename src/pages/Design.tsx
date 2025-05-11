import { DesignShowcase } from '../components/DesignShowcase';
export function Design() {
  return <div className="w-full bg-background py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Thiết Kế Giao Diện
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Thiết kế Figma tập trung vào trải nghiệm người dùng và tính thẩm
              mỹ
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <h2 className="text-2xl font-bold">Triết Lý Thiết Kế</h2>
            </div>
            <p className="text-muted-foreground">
              Cách tiếp cận thiết kế của chúng tôi ưu tiên sự đơn giản, dễ tiếp
              cận và hiệu quả. Chúng tôi tạo ra giao diện trực quan cho cả khách
              hàng và quản trị viên, tập trung vào việc tối ưu hóa quy trình
              thuê xe.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <h2 className="text-2xl font-bold">Hướng Đến Người Dùng</h2>
            </div>
            <p className="text-muted-foreground">
              Chúng tôi thực hiện nghiên cứu người dùng và kiểm thử khả năng sử
              dụng trong suốt quá trình thiết kế để đảm bảo giao diện đáp ứng
              nhu cầu của tất cả các bên liên quan.
            </p>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Thiết Kế Figma
          </h2>
          <DesignShowcase />
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💎</span>
            <h2 className="text-xl font-bold">Hệ Thống Thiết Kế</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Chúng tôi đã phát triển một hệ thống thiết kế toàn diện với các
            component, typography và bảng màu nhất quán để đảm bảo trải nghiệm
            người dùng đồng nhất.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 bg-background rounded-md">
              <div className="w-8 h-8 rounded-full bg-primary mb-2"></div>
              <span className="text-xs text-muted-foreground">Chính</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background rounded-md">
              <div className="w-8 h-8 rounded-full bg-secondary mb-2"></div>
              <span className="text-xs text-muted-foreground">Phụ</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background rounded-md">
              <div className="w-8 h-8 rounded-full bg-accent mb-2"></div>
              <span className="text-xs text-muted-foreground">Nhấn</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background rounded-md">
              <div className="w-8 h-8 rounded-full bg-muted mb-2"></div>
              <span className="text-xs text-muted-foreground">Nền</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
}