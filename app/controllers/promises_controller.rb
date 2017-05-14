class PromisesController < ApplicationController
  before_action :find_promise, only: [:edit, :update, :destroy]

  def index
    @months = {1=>"January", 2=>"February", 3=>"March", 4=>"March", 5=>"May", 6=>"June", 7=>"July", 8=>"August", 9=>"September", 10=>"October", 11=>"November", 12=>"December"}
    days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    @current_month_days = days_in_months[Time.now.month - 1]
    @current_month_number = Time.now.month
    @months.each {|key, value|  @current_month = value if @current_month_number === key}
    @current_day = Time.now.day

    if user_signed_in?
      @promises = Promise.where(:user_id => current_user.id)
    end
end

  def new
    @promise = current_user.promises.build
  end

  def create
    @promise = current_user.promises.build(promise_params)
    if @promise.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @promise.update(promise_params)
      redirect_to root_path
    else
      render 'edit'
    end
  end

  def destroy
    @promise.destroy
    redirect_to root_path
  end


  private

    def promise_params
      params.require(:promise).permit(:title)
    end

    def find_promise
      @promise = Promise.find(params[:id])
    end

end
