interface SprintProps {
  number: number;
  title: string;
  weeks: string;
  tasks: string[];
  completed: boolean;
}
export function SprintTimeline() {
  const sprints: SprintProps[] = [{
    number: 1,
    title: 'Khởi Động & Lập Kế Hoạch',
    weeks: 'Tuần 1-2',
    tasks: ['Thu thập yêu cầu', 'Lựa chọn công nghệ', 'Thiết lập dự án ban đầu'],
    completed: true
  }, {
    number: 2,
    title: 'Mô Hình & Cơ Sở Dữ Liệu',
    weeks: 'Tuần 3-4',
    tasks: ['Thiết kế cơ sở dữ liệu', 'Tạo các entity', 'Thiết lập repository'],
    completed: true
  }, {
    number: 3,
    title: 'API Backend Cơ Bản',
    weeks: 'Tuần 5-6',
    tasks: ['Phát triển REST API', 'Xây dựng service layer', 'Xác thực cơ bản'],
    completed: true
  }, {
    number: 4,
    title: 'Nền Tảng Frontend',
    weeks: 'Tuần 7-8',
    tasks: ['Thiết kế UI/UX', 'Xây dựng component library', 'Phát triển trang cơ bản'],
    completed: true
  }, {
    number: 5,
    title: 'Quản Lý Thành Viên',
    weeks: 'Tuần 9-10',
    tasks: ['Đăng ký thành viên (chủ xe, khách hàng)', 'Quy trình xác thực', 'Quản lý thành viên'],
    completed: true
  }, {
    number: 6,
    title: 'Quản Lý Thuê Xe',
    weeks: 'Tuần 11-12',
    tasks: ['Đăng ký xe', 'Tải lên hình ảnh', 'Chức năng tìm kiếm'],
    completed: true
  }, {
    number: 7,
    title: 'Hệ Thống Đặt Xe',
    weeks: 'Tuần 13-14',
    tasks: ['Hệ thống đặt chỗ', 'Tích hợp lịch', 'Xử lý thanh toán'],
    completed: true
  }, {
    number: 8,
    title: 'Kiểm Thử & Triển Khai',
    weeks: 'Tuần 15',
    tasks: ['Kiểm thử đơn vị & tích hợp', 'Sửa lỗi', 'Chuẩn bị triển khai'],
    completed: false
  }];
  return <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-8">
        {sprints.map(sprint => <div key={sprint.number} className="relative">
            {sprint.number < sprints.length && <div className={`absolute left-7 top-12 h-full w-0.5 ${sprint.completed ? 'bg-primary' : 'bg-muted'}`} />}
            <div className={`relative flex items-start p-6 rounded-lg border ${sprint.completed ? 'border-primary bg-primary/5' : 'border-muted bg-background'}`}>
              <div className="mr-4 flex-shrink-0 mt-1">
                <span className="text-xl">
                  {sprint.completed ? '✅' : '⏳'}
                </span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium">
                    Sprint {sprint.number}: {sprint.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {sprint.weeks}
                  </span>
                </div>
                <ul className="space-y-1 text-sm">
                  {sprint.tasks.map((task, index) => <li key={index} className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>{task}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}