export function Tech() {
  return <div className="w-full bg-background py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Công Nghệ Sử Dụng
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Các công nghệ hiện đại được sử dụng trong hệ thống của chúng tôi
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col h-full p-6 bg-muted/50 rounded-lg border">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <h2 className="text-2xl font-bold">Backend</h2>
            </div>
            <div className="space-y-4 flex-grow">
              <div>
                <h3 className="font-semibold">Spring Boot</h3>
                <p className="text-sm text-muted-foreground">
                  Framework Java mạnh mẽ cho việc xây dựng ứng dụng doanh nghiệp
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Spring Security</h3>
                <p className="text-sm text-muted-foreground">
                  Xử lý xác thực và phân quyền với các tiêu chuẩn bảo mật cao
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Spring Data JPA</h3>
                <p className="text-sm text-muted-foreground">
                  Đơn giản hóa việc truy cập dữ liệu với các repository
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">💾</span>
                <h3 className="font-semibold">Cơ Sở Dữ Liệu</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Oracle Database cho lưu trữ dữ liệu quan hệ với các tính năng nâng
                cao
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full p-6 bg-muted/50 rounded-lg border">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎨</span>
              <h2 className="text-2xl font-bold">Frontend</h2>
            </div>
            <div className="space-y-4 flex-grow">
              <div>
                <h3 className="font-semibold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  Framework React cho ứng dụng web với hiệu năng tối ưu
                </p>
              </div>
              <div>
                <h3 className="font-semibold">TypeScript</h3>
                <p className="text-sm text-muted-foreground">
                  Hỗ trợ kiểu dữ liệu tĩnh cho JavaScript, cải thiện chất lượng
                  code
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Tailwind CSS</h3>
                <p className="text-sm text-muted-foreground">
                  Framework CSS tiện ích cho việc xây dựng giao diện tùy chỉnh
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔄</span>
                <h3 className="font-semibold">Quản Lý State</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                React Query cho state server và Redux Toolkit cho state toàn cục
              </p>
            </div>
          </div>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">
            Công Cụ Phát Triển & Triển Khai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-background rounded-md">
              <h3 className="font-medium mb-1">Git & GitHub 📚</h3>
              <p className="text-xs text-muted-foreground">
                Kiểm soát phiên bản và hợp tác
              </p>
            </div>
            <div className="p-4 bg-background rounded-md">
              <h3 className="font-medium mb-1">Docker 🐳</h3>
              <p className="text-xs text-muted-foreground">
                Container hóa môi trường
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}