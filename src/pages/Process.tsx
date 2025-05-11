import { SprintTimeline } from '../components/SprintTimeline';
export function Process() {
  return <div className="w-full bg-background py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Quy Trình Phát Triển
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Phương pháp Agile với chu kỳ Sprint 2 tuần trong 15 tuần
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📅</span>
              <h2 className="text-2xl font-bold">Cấu Trúc Sprint</h2>
            </div>
            <p className="text-muted-foreground">
              Mỗi sprint kéo dài 2 tuần, với tổng cộng 8 sprint trong 15 tuần
              phát triển. Cấu trúc sprint của chúng tôi bao gồm:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
              <li>Lập kế hoạch sprint vào ngày đầu tiên</li>
              <li>Họp daily standup (15 phút)</li>
              <li>Đánh giá giữa sprint vào ngày thứ 5</li>
              <li>Demo sprint vào ngày cuối</li>
              <li>Họp retrospective để cải thiện quy trình</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <h2 className="text-2xl font-bold">Quy Trình Làm Việc</h2>
            </div>
            <p className="text-muted-foreground">
              Chúng tôi tuân theo quy trình Git có cấu trúc để đảm bảo chất
              lượng code và sự hợp tác:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-xl mt-0.5">🌿</span>
                <div>
                  <p className="font-medium">Nhánh tính năng</p>
                  <p className="text-sm text-muted-foreground">
                    Mỗi task được phát triển trên một nhánh riêng
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xl mt-0.5">🔍</span>
                <div>
                  <p className="font-medium">Pull request</p>
                  <p className="text-sm text-muted-foreground">
                    Code được review bởi ít nhất một thành viên
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xl mt-0.5">✅</span>
                <div>
                  <p className="font-medium">Tích hợp liên tục</p>
                  <p className="text-sm text-muted-foreground">
                    Các test tự động chạy trên mỗi PR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Tiến Độ Sprint
          </h2>
          <SprintTimeline />
        </div>
      </div>
    </div>;
}